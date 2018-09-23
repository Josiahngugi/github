import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {
  private username: string;
  private clientId="?access_token=30e19c35ae334db1bc7cb163a248c11864287092";
  private clientSecret=""
  constructor(private http:Http) {
    this.username="josiahngugi";

   }
   usernameset(search){
     this.username=search;
   }
  getdata(){
    return this.http.get("https://api.github.com/users/"+ this.username + this.clientId).
    map(res=>res.json())
  }
  getrepo(){
    return this.http.get("https://api.github.com/users/"+ this.username + "/repos").
      map(res=>res.json())
  }

}
