import { environment } from '../../environments/environment.development';

const baseUrl = environment.apiBaseUrl;

export const API_URLS = {
  getPosts: `${baseUrl}posts`,
  getPostById: `${baseUrl}posts`,
  addPost: `${baseUrl}posts/add`,

  login: `${baseUrl}auth/login`,
};
