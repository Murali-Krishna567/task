import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { Post } from '../Post';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-add-post',
  templateUrl:'./add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
   
   submitted:boolean=false;
   log:boolean =false;
   log1:boolean =false;
   id: number=101;
   post!: Post;
   form!: FormGroup;
   imageError:string='';
   imageError1:string='';
   
   constructor(
     public postService: PostService,
     private route: ActivatedRoute,
     private router: Router
   ) { }
   
   ngOnInit(): void {
     this.id = this.route.snapshot.params['postId'];
     this.postService.find(this.id).subscribe((data: Post)=>{
       this.post = data;
     });
     
     this.form = new FormGroup({
       title: new FormControl('', [Validators.required]),
       body: new FormControl('', Validators.required),
       
     });
   }
    
   get f(){
     return this.form.controls;
   }
      
   submit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('post');
    })
  }

  // public validateFileSize($event: any, maxFileSize: number): void {
  //   if ($event.files[0].size > maxFileSize) {
  //       console.log("wrong file")
  //   }
  // }
  onFileSelected1(fileInput:any){
    this.log=false;
    if (fileInput.target.files && fileInput.target.files[0]) {
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];

      if (fileInput.target.files[0].size > max_size) {
        alert("Maximum size allowed is 20MB ,Please try with image size <= 20MB");
         fileInput.target.files[0]=null
         
    }
    else{
      this.log=true;
      this.imageError="upload sucessfull";
    }
     
  }
}
   
   

  newTutorial(){
    this.submitted=false;
     
  }

}
