import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post-model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // posts: Post[] = [
  //   new Post("Mon premier post"),
  //   new Post("Mon deuxième post"),
  //   new Post("Mon troisième post")
  // ];
  posts:Post[];
  postsSubject = new Subject<Post[]>();
  constructor() {
    this.getPosts();
  }
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }
  emitPosts() {
    this.postsSubject.next(this.posts);
  }
  savePosts(){
    this.emitPosts();
    firebase.database().ref('/posts').set(this.posts);
  }
  addPost(post: Post) {
    this.posts.push(post);
    this.savePosts();
  }
  deletePost(post: Post) {
    let postID: number = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) { return true; }
      }
    )
    this.posts.splice(postID, 1);
    this.savePosts();
  }
  updateLoveIts(post: Post, number: number) {
    let postID: number = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) { return true; }
      }
    )
    this.posts[postID].loveIts += number;
    this.savePosts();
  }
}
