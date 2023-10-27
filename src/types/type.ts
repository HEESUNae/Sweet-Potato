export interface CommentType {
  _id: string;
  desc: string;
  author: string;
  userId: string;
  date: string;
}

export interface ListType {
  _id: string;
  desc: string;
  date: string;
  image: string;
  userId: string | null;
  author: string;
}
