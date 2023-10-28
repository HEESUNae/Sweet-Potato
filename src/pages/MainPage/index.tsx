import React, { useEffect, useState } from 'react';
import { Comment } from 'react-loader-spinner';
import { StyledMainPage } from './style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAtomInfo } from '../../atom/userAtom';
import { listAtom } from '../../atom/listAtom';

import useCommon from '../../hooks/useCommon';

import Layout from '../../containers/Layout';
import PrimaryBtn from '../../components/button/PrimaryBtn';
import Card from '../../components/list/Card';
import axiosApi from '../../utils/axios';

const MainPage = () => {
  const { navigation } = useCommon();
  const loginUser = useRecoilValue(userAtomInfo);
  const [listData, setListData] = useRecoilState(listAtom);
  const [isLoading, setIsLoading] = useState(false);

  // 리스트 read
  const getListData = async () => {
    try {
      setIsLoading(true);
      const res = await axiosApi.get('/api/list');
      if (res) {
        setListData(res.data.reverse());
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getListData();
  }, []);

  return (
    <Layout>
      <StyledMainPage $loading={isLoading}>
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
            {isLoading ? (
              <Comment
                visible={true}
                height="80"
                width="80"
                ariaLabel="comment-loading"
                wrapperStyle={{}}
                wrapperClass="comment-wrapper"
                color="#fff"
                backgroundColor="#ed7d31"
              />
            ) : (
              <div className="card-container">
                {listData.map((list) => (
                  <div key={list._id}>
                    <Card list={list} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </StyledMainPage>
    </Layout>
  );
};

export default MainPage;
