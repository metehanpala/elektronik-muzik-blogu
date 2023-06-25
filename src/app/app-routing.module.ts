import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { MusicProductionComponent } from './music-production/music-production.component';

const routes: Routes = [
  { path: 'blog-post/:postId', component: BlogPostComponent },
  { path: 'music-production', component: MusicProductionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
