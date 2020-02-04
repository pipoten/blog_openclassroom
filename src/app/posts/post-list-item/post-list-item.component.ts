import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post-model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;

  constructor(
    private postsService:PostsService //attention le private est important!
  ) { }

  ngOnInit() {
  }

  onLove(){
    this.postsService.updateLoveIts(this.post,1);
  }
  onHate(){
    this.postsService.updateLoveIts(this.post,-1);
  }
  onDelete(){
    this.postsService.deletePost(this.post);
  }

}
