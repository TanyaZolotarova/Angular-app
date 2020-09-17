import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {UserInterface} from '../components/interfaces/user.interface';

export interface AuthResponse {
  user: UserInterface;
  expiresIn: string;
}


@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor( private http: HttpClient) {

  }
  get token(): string {
    const expDate = new Date(localStorage.getItem('auth-token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('auth-token');
  }

  public logout(): void {
    this.setToken(null);
  }

  private setToken(response: AuthResponse | null): void {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('auth-token', response.user.token);
      localStorage.setItem('auth-token-exp', expDate.toString());
    } else {
      localStorage.removeItem('auth-token');
      localStorage.removeItem('auth-token-exp');
    }
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  public getData(): Observable<any> {
    return this.http.get('http://localhost:8001/users');
  }

  public createUser( body: { email: string, password: string, name: string}): Observable<any> {
    return this.http.post(`${environment.api}/users`, body);
  }

  public register( body: { email: string, password: string, name: string}): Observable<any> {
    return this.http.post(`${environment.api}/users/register`, body);
  }

  public login( body: { email: string, password: string}): Observable<any> {

    return this.http.post(`${environment.api}/users/login`, body).pipe(
      tap(((response: AuthResponse ) => {
        this.setToken(response);
      })),
      catchError((err) => {
        this.setToken(null);
        return err;
      })
    );
  }

  public me(): Observable<any>{
    const token = this.token;
    console.log(token);
    return this.http.get(`${environment.api}/users/me`, {
      headers: {
         authorization: token,
        'Content-Type': 'application/json'
      }
    });
  }

  public createTodo( body: { title: string}): Observable<any> {
    return this.http.post(`${environment.api}/tasks`, body);
  }

  public getTodos(): Observable<any>{
    return this.http.get(`${environment.api}/tasks`);
  }

  public deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${environment.api}/tasks/${id}`);
  }

  public updateTodo(data): Observable<any> {
    const {id, status} = data;
    return this.http.put(`${environment.api}/tasks/${id}/update`, {status});
  }
}



