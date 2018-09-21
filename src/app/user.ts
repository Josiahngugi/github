export class User {
  public link="https://api.github.com/users/";
  public token="?access_token=30e19c35ae334db1bc7cb163a248c11864287092";
  public apiUrl=""
  constructor(public name:string,public bio:string,public email:string,public location:string,public company:string,public avatar_url:string,){
    this.apiUrl=this.link+this.token
  }

}
