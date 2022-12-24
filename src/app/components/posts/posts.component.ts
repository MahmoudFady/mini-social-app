import { IPost } from './../model/post.model';
import { PostService } from './post.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts!: IPost[];
  loading = false;
  constructor(private postService: PostService) {}
  ngOnInit() {
    this.loading = true;
    this.postService.getAllPosts().subscribe({
      next: (response) => {
        this.posts = response.posts;
        this.loading = false;
      },
    });
  }
}
