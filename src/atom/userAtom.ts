import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userAtomInfo = atom({
  key: 'USER/USERINFO',
  default: { userId: '', userName: '' },
  effects_UNSTABLE: [persistAtom],
});
