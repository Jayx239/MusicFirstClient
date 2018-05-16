import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogonComponent } from './logon/logon.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { LogonFormComponent } from './logon/logon-form/logon-form.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { MediaComponent } from './media/media.component';
import { AudioComponent } from './media/audio/audio.component';
import { VideoComponent } from './media/video/video.component';
import { ImageComponent } from './media/image/image.component';
import { BrowseComponent } from './browse/browse.component';
import { MediaContainerComponent } from './media/media-container/media-container.component';
import { BrowseVideosComponent } from './browse/browse-videos/browse-videos.component';
import { BrowseMusicComponent } from './browse/browse-music/browse-music.component';



@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    RegisterComponent,
    RegisterFormComponent,
    LogonFormComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    UserComponent,
    MediaComponent,
    AudioComponent,
    VideoComponent,
    ImageComponent,
    BrowseComponent,
    MediaContainerComponent,
    BrowseVideosComponent,
    BrowseMusicComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
