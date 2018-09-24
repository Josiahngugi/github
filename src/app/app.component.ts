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
  users:object[];
  search: any;
  searchre:string
  repos:any[];

  constructor(private servicedata:GithubserviceService){
  }

searchrepo(searchre){
let result=this.repos.filter(repo=>repo.name===searchre)
 alert(result)
}

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
