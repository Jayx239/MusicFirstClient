import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LogonComponent } from './logon/logon.component';
import { RegisterComponent } from './register/register.component';
import {BrowseComponent} from './browse/browse.component';
import {BrowseMusicComponent} from './browse/browse-music/browse-music.component';
import {BrowseVideosComponent} from './browse/browse-videos/browse-videos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'logon', component: LogonComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'browse', component: BrowseComponent,
    children: [
      { path: '', redirectTo: '/browse', pathMatch: 'full' },
      { path: 'music', component: BrowseMusicComponent },
      { path: 'videos', component: BrowseVideosComponent },
      { path: 'images', component: BrowseVideosComponent }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
