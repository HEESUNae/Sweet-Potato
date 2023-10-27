import React, { useEffect } from 'react';
import { StyledMainPage } from './style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAtomInfo } from '../../atom/userAtom';
import { listAtom } from '../../atom/listAtom';

import useCommon from '../../hooks/useCommon';
import useList from '../../hooks/useList';

import Layout from '../../containers/Layout';
import PrimaryBtn from '../../components/button/PrimaryBtn';
import Card from '../../components/list/Card';
import axiosApi from '../../utils/axios';

const MainPage = () => {
  const { navigation } = useCommon();
  const loginUser = useRecoilValue(userAtomInfo);
  const [listData, setListData] = useRecoilState(listAtom);

  // 리스트 read
  const getListData = async () => {
    axiosApi
      .get('/list', { timeout: 5000 })
      .then((res) => {
        setListData(res.data.reverse());
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          console.log('요청이 타임아웃되었습니다.');
        } else {
          console.error('요청 실패:', error);
        }
      });
  };

  useEffect(() => {
    getListData();
  }, []);

  return (
    <Layout>
      <StyledMainPage>
        <section className="visual">
          <div className="user-info">
            <div className="user-welcome">
              <h1>세상 모든 고구마들을 위한 커뮤니티</h1>
              <p>
                <span>{loginUser?.userName}</span> 고구마님, 환영합니다!
              </p>
            </div>
            <PrimaryBtn title="글쓰기" onClick={() => navigation('/write')} />
          </div>
          <div className="list-container">
            <div className="card-container">
              {listData.map((list) => (
                <div key={list._id}>
                  <Card list={list} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </StyledMainPage>
    </Layout>
  );
};

export default MainPage;
