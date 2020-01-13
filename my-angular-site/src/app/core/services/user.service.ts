import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://api.github.com/users';

  constructor(private http: HttpClient) { }

  /** Get All Users */
  getUsers(){
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }

  /** Get a single user by username */
  getUser(username: string){
    return this.http.get(`${this.apiUrl}/${username}`);
  }
}
