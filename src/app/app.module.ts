import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubserviceService} from './githubservice.service';
import { BrowserXhr, HttpModule } from '@angular/http';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';


import { AppComponent } from './app.component';
// import { HttpModule} from '@angular/http';
import { FdatePipe } from './fdate.pipe';
import { HeadDirective } from './head.directive';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {path:"about",component:AboutComponent},
  {path:"contacts",component:ContactsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FdatePipe,
    HeadDirective,
    AboutComponent,
    ContactsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgProgressModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    GithubserviceService,
     { provide: BrowserXhr, useClass: NgProgressBrowserXhr }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
