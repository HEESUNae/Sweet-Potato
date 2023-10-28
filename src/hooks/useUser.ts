import axiosApi from '../utils/axios';

const useUser = () => {
  // 로그인
  const userLogin = (data) => {
    return axiosApi.post('/api/user/login', data);
  };

  // 아이디 중복체크
  const userIdCheck = async (idValue) => {
    return await axiosApi.post('/api/user/checkId', { userId: idValue });
  };

  // 회원가입
  const userJoin = async (data) => {
    return await axiosApi.post('/api/user/join', data);
  };

  return {
    userLogin,
    userJoin,
    userIdCheck,
  };
};

export default useUser;
