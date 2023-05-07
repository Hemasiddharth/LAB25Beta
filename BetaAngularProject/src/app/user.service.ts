import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}

  public logInData(result: any): Observable<{}> {
    return this.http.post<string>(
      'https://bookcart.azurewebsites.net/api/Login',
      result
    );
  }
}
