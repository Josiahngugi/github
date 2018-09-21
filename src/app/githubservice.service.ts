import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User} from './user'

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {

  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get("https://api.github.com/users/Josiahngugi?access_token=30e19c35ae334db1bc7cb163a248c11864287092")
  }
}
