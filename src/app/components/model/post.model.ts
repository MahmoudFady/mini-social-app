export interface IPost {
  _id: string;
  content: string;
  date: string;
  imagesPath: string[];
  creator: {
    _id: string;
    fullName: string;
    imagePath: string;
  };
  metaData: {
    commentsCount: number;
    likesCount: number;
  };
  hidden: boolean;
}
