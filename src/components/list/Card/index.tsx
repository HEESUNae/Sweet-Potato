import React from 'react';
import { StyledCard } from './style';
import { ListType } from '../../../types/type';
import { farmatDate } from '../../../utils/dayjs';
import { useRecoilValue } from 'recoil';
import { userAtomInfo } from '../../../atom/userAtom';

import useCommon from '../../../hooks/useCommon';
import useList from '../../../hooks/useList';

import OutlineTextarea from '../../textarea/OutlineTextarea';
import PrimaryBtn from '../../button/PrimaryBtn';
import { thumbnail } from '../../../consts/image';

interface CardProps {
  list?: ListType;
  $writeMode?: boolean;
  $detailMode?: boolean;
  selectImage?: string;
  editPrev?: ListType;
  register?: any;
  postUser?: string;
  textLength?: number;
  onClick?: () => void;
}

const Card = ({
  list,
  selectImage,
  $writeMode = false,
  $detailMode = false,
  editPrev,
  register,
  postUser,
  textLength,
}: CardProps) => {
  const { navigation } = useCommon();
  const { deleteList } = useList();
  const loginUser = useRecoilValue(userAtomInfo);
  const maxLength = 400;

  // 리스트 삭제
  const deleteListData = async (listId: string) => {
    try {
      if (window.confirm('정말 삭제하시겠습니까?')) {
        const res = await deleteList({ data: { _id: listId } });
        if (res.status === 200) {
          navigation('/main');
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledCard $writeMode={$writeMode} $detailMode={$detailMode}>
      <div
        className="card"
        style={{
          backgroundImage: `url(${list ? list?.image : thumbnail[selectImage || 'road']})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="mask"></div>
        {$writeMode ? (
          <div className="card-desc">
            <OutlineTextarea
              placeholder="내 속마음을 적어보아요"
              maxLength={maxLength}
              register={{ ...register }}
              defaultValue={editPrev?.desc}
            />
            <p className="card-textarea-length">
              {textLength} / {maxLength}
            </p>
          </div>
        ) : (
          list && (
            <div className="card-desc" onClick={() => !$detailMode && navigation('/detail', { state: { list: list } })}>
              <p>{list.desc}</p>
              <div className="card-info">
                <p className="date">
                  {farmatDate(list.date)} / {list.author}
                </p>
              </div>
              {$detailMode && postUser === loginUser.userId && (
                <div className="card-btn-wrap">
                  <PrimaryBtn title="삭제" $bgcolor="#4F4A45" onClick={() => deleteListData(list._id)} />
                  <PrimaryBtn title="수정" onClick={() => navigation('/write', { state: { list: list } })} />
                </div>
              )}
            </div>
          )
        )}
      </div>
    </StyledCard>
  );
};

export default Card;
