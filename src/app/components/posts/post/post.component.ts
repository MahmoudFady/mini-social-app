import { IPost } from './../../model/post.model';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post!: IPost;
  constructor() {}
  ngOnInit() {
    this.post.date = new Date(
      this.post.date
    ).toDateString() as unknown as string;
  }
}
