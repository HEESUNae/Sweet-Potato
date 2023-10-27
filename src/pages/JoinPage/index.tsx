import React, { useState } from 'react';
import { StyledJoinPage } from './style';
import { useForm } from 'react-hook-form';

import useCommon from '../../hooks/useCommon';
import useUser from '../../hooks/useUser';

import PrimaryInput from '../../components/input/PrimaryInput';
import PrimaryBtn from '../../components/button/PrimaryBtn';

type FormData = {
  userName: string;
  userId: string;
  userPw: string;
};

const JoinPage = () => {
  const { navigation } = useCommon();
  const { userJoin, userIdCheck } = useUser();
  const { register, handleSubmit, watch } = useForm<FormData>();
  const idValue = watch('userId');
  const [isIdCheck, setIsIdCheck] = useState(false);
  const [isIdDisable, setIsIdDisable] = useState(false);

  // 아이디 중복체크
  const onIsIdCheck = async () => {
    if (isIdCheck) {
      setIsIdCheck(false);
      setIsIdDisable(false);
      return;
    }
    try {
      const res = await userIdCheck(idValue);
      if (res.status === 200) {
        if (!res.data.checkId) {
          setIsIdCheck(true);
          setIsIdDisable(true);
        }
      }
    } catch (e) {
      alert('다른 유저가 사용중인 아이디입니다.');
      console.error(e);
    }
  };

  // 회원가입
  const onSubmit = async (data: FormData) => {
    try {
      if (!isIdCheck) {
        alert('아이디 중복확인을 해주세요');
        return;
      }
      const res = await userJoin({ ...data, userId: idValue });
      console.log(res);
      if (res.status === 201) {
        navigation('/');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledJoinPage>
      <div className="join-container">
        <h2>회원가입</h2>
        <form className="input-wrap" onSubmit={handleSubmit(onSubmit)} method="POST">
          <PrimaryInput placeholder="이름" register={{ ...register('userName', { required: true }) }} />
          <div className="join-id-check-wrap">
            <PrimaryInput
              placeholder="아이디"
              register={{ ...register('userId', { required: true, disabled: isIdDisable }) }}
            />
            <PrimaryBtn
              title={isIdCheck ? '변경하기' : '중복확인'}
              className={`join-id-check-btn ${isIdCheck && 'active'}`}
              onClick={onIsIdCheck}
            />
          </div>
          <PrimaryInput
            type="password"
            placeholder="비밀번호"
            register={{ ...register('userPw', { required: true }) }}
          />
          <PrimaryBtn type="submit" title="JOIN" className="join-btn" />
        </form>
      </div>
    </StyledJoinPage>
  );
};

export default JoinPage;
