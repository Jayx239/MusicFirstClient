import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LogonComponent } from './logon/logon.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'logon', component: LogonComponent },
  { path: 'register', component: RegisterComponent },


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
