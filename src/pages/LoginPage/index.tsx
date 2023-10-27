import React from 'react';
import { StyledLoginPage } from './style';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { userAtomInfo } from '../../atom/userAtom';

import useUser from '../../hooks/useUser';
import useCommon from '../../hooks/useCommon';

import PrimaryInput from '../../components/input/PrimaryInput';
import PrimaryBtn from '../../components/button/PrimaryBtn';
import Logo from '../../components/logo/Logo';

type FormData = {
  userId: string;
  userPw: string;
};

const LoginPage = () => {
  const { navigation } = useCommon();
  const { userLogin } = useUser();
  const { register, handleSubmit } = useForm<FormData>();
  const setLoginUser = useSetRecoilState(userAtomInfo);

  // 로그인
  const onSubmit = async (data: FormData) => {
    try {
      const res = await userLogin(data);
      if (res.status === 200) {
        setLoginUser(res.data);
        navigation('/main');
      } else {
        alert('존재하지 않는 회원입니다.');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledLoginPage>
      <div className="login-container">
        <Logo />
        <p className="desc">세상 모든 고구마 답답이를 위한 고민상담 커뮤니티</p>
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <PrimaryInput placeholder="아이디" register={{ ...register('userId', { required: true }) }} />
          <PrimaryInput
            type="password"
            placeholder="비밀번호"
            register={{ ...register('userPw', { required: true }) }}
          />
          <PrimaryBtn type="submit" title="LOGIN" />
        </form>
        <div className="join-btn">
          <button type="button" onClick={() => navigation('/join')}>
            처음 오셨다면 이거 눌러요!
          </button>
        </div>
      </div>
    </StyledLoginPage>
  );
};

export default LoginPage;
