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
  users=[]
  constructor(private servicedata:GithubserviceService){

  }
  searchfunc(search){
    let linksearch =(search.value)
};
  ngOnInit(){
    this.servicedata.getdata().
    subscribe((data)=>{
this.users=data
    })
  }
}
