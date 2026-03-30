import { IPost } from './ipost';

export interface IPostResponse {
  posts: IPost[];
  total: number;
  skip: number;
  limit: number;
}
