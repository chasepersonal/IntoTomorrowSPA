import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'album', component: AlbumComponent },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
]
