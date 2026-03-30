import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ILoginRequest } from '../models/ilogin-request';
import { Observable, retry, tap } from 'rxjs';
import { ILoginResponse } from '../models/ilogin-response';
import { API_URLS } from '../constants/API_URLS';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private tokenKey = 'token';

  private http = inject(HttpClient);
  private router = inject(Router);

  Login(data: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(API_URLS.login, data).pipe(
      tap((response) => {
        this.saveToken(response.accessToken);
      }),
    );
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login-api']);
  }

  // user logged ?
  isLoggedIn(): boolean {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }
}
