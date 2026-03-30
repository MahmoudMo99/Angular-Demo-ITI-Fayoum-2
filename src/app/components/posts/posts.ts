import { Component, inject, OnInit } from '@angular/core';
import { PostsS } from '../../services/posts';
import { IPostResponse } from '../../models/ipost-response';
import { IPost } from '../../models/ipost';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  imports: [ReactiveFormsModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  private postsService = inject(PostsS);

  addPostForm!: FormGroup;

  errorMessage: string = '';
  isSubmitting: boolean = false;

  posts: IPost[] = [];

  constructor() {
    this.addPostForm = new FormGroup({
      title: new FormControl('', []),
      body: new FormControl('', []),
      userId: new FormControl(1, []),
    });
  }

  // data loading --> ngOninit
  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postsService.getAllPosts().subscribe({
      next: (response) => {
        // console.log('Successfully');
        // console.log(response);
        this.posts = response.posts;
      },
      error: () => {
        this.errorMessage = 'Failed to load data';
      },
    });
  }
  deletePost(id: number) {
    this.postsService.deletePost(id).subscribe({
      next: (response) => {
        this.posts = this.posts.filter((post) => post.id !== id);
      },
      error: () => {
        alert('Failed to delete post');
      },
    });
  }

  addPost() {
    if (this.addPostForm.invalid) return;
    this.isSubmitting = true;
    this.postsService.addPost(this.addPostForm.getRawValue()).subscribe({
      next: (post) => {
        this.posts.unshift(post);
        this.addPostForm.reset();
        this.isSubmitting = false;
        alert('Post added successfully');
      },
      error: () => {
        this.isSubmitting = false;
        alert('Failed to add post');
      },
    });
  }
}
