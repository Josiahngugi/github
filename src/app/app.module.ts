import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubserviceService} from './githubservice.service'

import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { FdatePipe } from './fdate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FdatePipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
