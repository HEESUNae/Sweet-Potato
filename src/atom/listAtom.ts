import { atom } from 'recoil';

export const listAtom = atom({
  key: 'LIST/ALL',
  default: [
    {
      _id: '',
      author: '',
      date: '',
      desc: '',
      image: '',
      userId: '',
    },
  ],
});
