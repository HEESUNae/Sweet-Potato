import React, { useEffect, useState } from 'react';
import { StyledDetailPage } from './style';
import { useLocation } from 'react-router-dom';
import { farmatDate } from '../../utils/dayjs';
import { CommentType } from '../../types/type';

import Card from '../../components/list/Card';
import Layout from '../../containers/Layout';
import PrimaryInput from '../../components/input/PrimaryInput';
import PrimaryBtn from '../../components/button/PrimaryBtn';
import { useForm } from 'react-hook-form';
import useComment from '../../hooks/useComment';
import { useRecoilValue } from 'recoil';
import { userAtomInfo } from '../../atom/userAtom';

interface DetailPageProps {
  onClick?: () => void;
}

const DetailPage = ({ onClick }: DetailPageProps) => {
  const location = useLocation();
  const { createComment, readComment, deleteComment } = useComment();
  const userInfo = useRecoilValue(userAtomInfo);
  const { register, handleSubmit, reset } = useForm();
  const postUser = location.state.list.userId;
  const postId = location.state.list._id;
  const $detailMode = location.pathname === '/detail';

  const [commentList, setCommentList] = useState([]);

  // 댓글 생성
  const onSubmitComment = async (data) => {
    try {
      const res = await createComment(data, postId);
      if (res.status === 200) {
        reset({ desc: '' });
        getComment();
      }
    } catch (e) {
      console.log(e);
    }
  };

  // 댓글 매핑
  const getComment = async () => {
    try {
      const res = await readComment(postId);
      if (res.status === 200) {
        setCommentList(res.data.reverse());
      }
    } catch (e) {
      console.log(e);
    }
  };

  // 댓글 삭제
  const deleteCommentData = async (commentId) => {
    try {
      if (window.confirm('정말 삭제하시겠습니까?')) {
        const res = await deleteComment({ data: { _id: commentId } });
        if (res.status === 200) {
          getComment();
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <StyledDetailPage $detailMode={$detailMode}>
      <Layout>
        <div className="detail-container">
          <div className="detail-inner">
            <Card onClick={onClick} list={location.state.list} $detailMode postUser={postUser} />
            <div className="chat-container">
              <div className="chat-input-wrap">
                <PrimaryInput placeholder="댓글을 남겨주세요" register={{ ...register('desc', { required: true }) }} />
                <PrimaryBtn type="submit" title="댓글 저장하기" onClick={handleSubmit(onSubmitComment)} />
              </div>
              <div className="chat-list-wrap">
                <div className="scroll">
                  {commentList.length > 0 ? (
                    commentList.map((comment: CommentType) => (
                      <div className="chat-list" key={comment._id}>
                        <div>
                          <p>{comment.author}</p>
                          <p>{comment.desc}</p>
                          <p>{farmatDate(comment.date)}</p>
                        </div>
                        {comment.userId === userInfo.userId && (
                          <PrimaryBtn title="삭제" $bgcolor="#4F4A45" onClick={() => deleteCommentData(comment._id)} />
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="default">당신의 조언이 힘이 될지도 몰라요</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </StyledDetailPage>
  );
};

export default DetailPage;
