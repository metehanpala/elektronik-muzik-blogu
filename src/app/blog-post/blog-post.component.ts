import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const postId = params['postId'];

      // Burada, gerçek verileri API'den veya başka bir kaynaktan alabilirsiniz.
      // Şu anda, params nesnesinden postId değerine göre örnek bir veri kullanıyorum.
      if (postId === '1') {
        this.post = {
          title: 'Başlık 1',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        };
      } else if (postId === '2') {
        this.post = {
          title: 'Başlık 2',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada purus vel lectus porta, eu tempor nulla ultricies.'
        };
      } else {
        // Geçersiz postId durumunda bir işlem yapabilirsiniz.
      }
    });
  }
}
