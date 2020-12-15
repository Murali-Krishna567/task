 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../Post';
import { PostService } from '../services/post.service';
//import { NgModule} from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  currentTutorial :Post | undefined;
  currentIndex = -1;
  posts: Post[] = [];
  max=8;
  constructor(public postService: PostService,private route:Router) { }
  
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }
  
  deletePost(id: number){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
        console.log('Post deleted successfully!');
    })
  }

  setActiveTutorial(tutorial: Post, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  addpo(){
    this.route.navigate(['post/create']);
  }
  

}
