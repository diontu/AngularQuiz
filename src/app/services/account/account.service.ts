import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private user: User;

  constructor(
    private http: HttpClient
  ) { }

  public get userValue(): User {
    return this.user;
  }

  login(username: string, pw: string) {
    const observable$ = this.http.post('/api/login', {
      username: username,
      password: pw
    }, {
      responseType: 'text'
    });
    observable$.subscribe(httpResponse => console.log(httpResponse));
    // observable.subscribe();
  }

  register(firstName: string, lastName: string, username: string, pw: string) {
    const observable$ = this.http.post('/api/register', {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: pw
    }, {
      responseType: 'text'
    });
    observable$.subscribe(httpResponse => console.log(httpResponse));
    // observable.subscribe();
  }
}
