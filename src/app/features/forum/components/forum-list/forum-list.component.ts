import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ForumPostComponent } from '../forum-post/forum-post.component';
import { ForumService } from './services/forum.service';

@Component({
  selector: 'app-forum-list',
  imports: [CommonModule, ForumPostComponent],
  templateUrl: './forum-list.component.html',
  styleUrl: './forum-list.component.css'
})
export class ForumListComponent {
   private forumService = inject(ForumService);
  
  posts = this.forumService.posts;

}
