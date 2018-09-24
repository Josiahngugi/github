import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import {environment} from './../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {
  private username: string;
  constructor(private http:Http) {
    this.username="josiahngugi";

   }
   usernameset(search){
     this.username=search;
   }
 //   // let promise=new Promise((resolve,reject)=>{
 //   interface json{
 //   users:[]
 // }
  getdata(){
    return this.http.get(environment.apiUrl+ this.username ).
    map(res=>res.json())

  }
  getrepo(){
    return this.http.get(environment.apiUrl+ this.username + "/repos").
      map(res=>res.json())
  }

}
