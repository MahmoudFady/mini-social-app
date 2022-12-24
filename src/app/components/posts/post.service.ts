import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../model/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private readonly url = 'http://localhost:3000/api/dir/';

  constructor(private http: HttpClient) {}
  getAllPosts() {
    return this.http.get<{
      message: string;
      postCount: number;
      posts: IPost[];
    }>(`${this.url}post`);
  }
}
