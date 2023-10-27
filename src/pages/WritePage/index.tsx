import React, { useEffect, useState } from 'react';
import { StyledWritePage } from './style';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { thumbnail } from '../../consts/image';

import useCommon from '../../hooks/useCommon';
import useList from '../../hooks/useList';

import Layout from '../../containers/Layout';
import Card from '../../components/list/Card';
import PrimaryBtn from '../../components/button/PrimaryBtn';
import PrimaryCheckbox from '../../components/checkbox/PrimaryCheckbox';

const WritePage = () => {
  const location = useLocation();
  const { navigation } = useCommon();
  const { createList, updateList } = useList();
  const { register, handleSubmit } = useForm();
  const [selectImage, setSelectImage] = useState('road');
  const [textLength, setTextLength] = useState(0);
  const [editPrev, setEditPrev] = useState({
    _id: '',
    desc: '',
    date: '',
    image: '',
    userId: '',
    author: '',
  });

  // 리스트 생성
  const onSubmitCreate = async (data) => {
    const addImgData = {
      ...data,
      image: `https://github.com/HEESUNae/React-SweetPotato/blob/main/src/assets/img/img-${selectImage}.jpg?raw=true`,
    };
    try {
      const res = await createList(addImgData);
      if (res.status === 200) {
        alert('글 등록이 완료되었습니다.');
        // navigation('/main');
      }
    } catch (e) {
      console.log('실페', e);
      // res. !== 'ECONNABORTED'
      console.log(e);
    }
  };

  // 리스트 수정
  const onSubmitEdit = async (data) => {
    const addImgData = {
      ...data,
      image: `https://github.com/HEESUNae/React-SweetPotato/blob/main/src/assets/img/img-${selectImage}.jpg?raw=true`,
    };
    try {
      const res = await updateList(data, addImgData);

      if (res.status === 200) {
        alert('글 수정이 완료되었습니다.');
        navigation('/main');
      }
    } catch (e) {
      console.log(e);
    }
  };

  // 수정하기
  useEffect(() => {
    if (location.state?.list) {
      setEditPrev(location.state.list);
    }
  }, []);

  // 이미지 변경
  const changeImageUrl = (imgName: string) => {
    setSelectImage(imgName);
  };

  return (
    <StyledWritePage>
      <Layout>
        <div className="write-container">
          <div className="inner">
            <div className="card-setting">
              <Card
                $writeMode
                selectImage={selectImage}
                textLength={textLength}
                register={{
                  ...register('desc', { required: true, onChange: (e) => setTextLength(e.target.value.length) }),
                }}
                editPrev={editPrev}
              />
              <div className="photo-container">
                <h3>가끔씩은 솔직해도 괜찮아요</h3>
                <div className="photo-wrap">
                  {Object.keys(thumbnail).map((img) => (
                    <div
                      className={`photo ${selectImage === img && 'active'}`}
                      key={img}
                      onClick={() => changeImageUrl(img)}
                    >
                      <img src={thumbnail[img]} alt="" />
                    </div>
                  ))}
                </div>
                <h3>익명으로도 남길 수 있어요</h3>
                <PrimaryCheckbox id={'scret'} title="익명의 고구마로 글 남기기" register={{ ...register('checked') }} />
              </div>
            </div>
            <div className="card-btn-wrap">
              <PrimaryBtn title="아직은 아니에요" $bgcolor="#6c5f5b" onClick={() => navigation('/main')} />
              {editPrev._id === '' ? (
                <PrimaryBtn type="submit" title="작성하기" onClick={handleSubmit(onSubmitCreate)} />
              ) : (
                <PrimaryBtn type="submit" title="수정하기" onClick={handleSubmit(onSubmitEdit)} />
              )}
            </div>
          </div>
        </div>
      </Layout>
    </StyledWritePage>
  );
};

export default WritePage;
