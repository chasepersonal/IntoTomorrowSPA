import { BlogService } from './../_services/blog.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts$: Object;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.blogService.getPosts().subscribe(blogService => {
      this.posts$ = blogService;
    });
  }

}
