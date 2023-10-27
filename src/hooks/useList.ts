import axiosApi from '../utils/axios';
import { useRecoilValue } from 'recoil';
import { userAtomInfo } from '../atom/userAtom';

const useList = () => {
  const userInfo = useRecoilValue(userAtomInfo);

  // 리스트 생성
  const createList = async (data) => {
    const offset = new Date().getTimezoneOffset() * 60000;
    const addPost = {
      ...data,
      image: data.image,
      userId: userInfo.userId,
      author: data.checked ? '익명의 고구마' : userInfo.userName,
      date: new Date(Date.now() - offset).toISOString(),
    };

    return await axiosApi.post('/list', addPost);
  };

  // 리스트 수정
  const updateList = async (data, editPrev) => {
    const offset = new Date().getTimezoneOffset() * 60000;
    const updatePost = {
      ...editPrev,
      desc: data.desc,
      image: data.image,
      author: data.checked ? '익명의 고구마' : userInfo.userName,
      date: new Date(Date.now() - offset).toISOString(),
    };
    return await axiosApi.put('/list', updatePost);
  };

  // 리스트 삭제
  const deleteList = async (listId) => {
    return await axiosApi.delete('/list', listId);
  };

  return {
    createList,
    updateList,
    deleteList,
  };
};

export default useList;
