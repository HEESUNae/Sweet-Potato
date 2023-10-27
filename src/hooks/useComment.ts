import { useRecoilValue } from 'recoil';
import axiosApi from '../utils/axios';
import { userAtomInfo } from '../atom/userAtom';

const useComment = () => {
  const userInfo = useRecoilValue(userAtomInfo);

  // 댓글 생성
  const createComment = async (data, postId) => {
    const offset = new Date().getTimezoneOffset() * 60000;
    const addComment = {
      userId: userInfo.userId,
      postId: postId,
      desc: data.desc,
      author: userInfo.userName,
      date: new Date(Date.now() - offset).toISOString(),
    };
    return await axiosApi.post('/comment/add', addComment);
  };

  // 댓글 매핑
  const readComment = async (postId) => {
    return await axiosApi.post('/comment', { postId: postId });
  };

  // 댓글 삭제
  const deleteComment = async (listId) => {
    return await axiosApi.delete('/comment', listId);
  };

  return {
    createComment,
    readComment,
    deleteComment,
  };
};

export default useComment;
