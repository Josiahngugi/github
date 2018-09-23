import { Component } from '@angular/core';
import { GithubserviceService } from './githubservice.service';
import { User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github';
  users:any[];
  search: any;
  repos:any[];

  constructor(private servicedata:GithubserviceService){
  }
//   searchfunc(){
//     this.servicedata.username = this.search.value;
// };
searchfnc(){
this.servicedata.usernameset(this.search)
this.servicedata.getdata().
subscribe((data)=>{
  console.log(data)
  this.users=data
    });
this.servicedata.getrepo().
subscribe((data)=>{
console.log(data)
this.repos=data
});
}
  ngOnInit(){

  }
}
