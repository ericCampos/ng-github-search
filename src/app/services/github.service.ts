import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id = '36be6727c9e3eda9bba1';
    private client_secret = 'e89938e1cc176e0ca06712deadda4b44237308a4';
    
  constructor(private _http: Http) {
      
      console.log('Github service ready');
      this.username = '';
  }
  
  getUser(){
      return this._http.get('https://api.github.com/users/'
                            + this.username
                            + '?client_id=' + this.client_id
                            + '&client_secret=' + this.client_secret)
        .map(res => res.json());
  }
  
  getRepositories(){
      return this._http.get('https://api.github.com/users/'
                            + this.username
                            + '/repos?client_id=' + this.client_id
                            + '&client_secret=' + this.client_secret)
        .map(res => res.json());
  }
  
  updateUser(username){
     this.username = username; 
  }

}
