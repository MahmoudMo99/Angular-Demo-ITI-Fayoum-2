import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostResponse } from '../models/ipost-response';
import { API_URLS } from '../constants/API_URLS';
import { IPost } from '../models/ipost';
import { AddPost } from '../models/add-post';
import { DeletedPostResponse } from '../models/deleted-post-response';

@Injectable({
  providedIn: 'root',
})
export class PostsS {
  private http = inject(HttpClient);

  getAllPosts(): Observable<IPostResponse> {
    return this.http.get<IPostResponse>(API_URLS.getPosts);
  }
  getPostById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${API_URLS.getPostById}/${id}`);
  }

  addPost(post: AddPost): Observable<IPost> {
    return this.http.post<IPost>(API_URLS.addPost, post);
  }
  deletePost(id: number): Observable<DeletedPostResponse> {
    return this.http.delete<DeletedPostResponse>(`${API_URLS.getPostById}/${id}`);
  }
}
