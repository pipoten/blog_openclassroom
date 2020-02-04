import { Component, OnInit, Input, AfterViewInit, OnDestroy, Injectable } from '@angular/core';
import { Post } from 'src/app/models/post-model';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
@Injectable()
export class PostListComponent implements OnInit, OnDestroy{
  posts: Post[];
  postsSubscription: Subscription;
  constructor(
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts=posts;
      }
    );
    this.postsService.emitPosts();
  }
  ngOnDestroy(){
    this.postsSubscription.unsubscribe();//unsubscribe on subscription, not on subject!!
  }
}
