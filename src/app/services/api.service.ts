import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor( private http: HttpClient) {

  }
  public getData(): Observable<any> {
    return this.http.get('http://localhost:8001/users');
  }

  public createUser( body: { email: string, password: string, name: string}): Observable<any> {
    return this.http.post(`${environment.api}/users`, body);
  }

  public login( body: { email: string, password: string}): Observable<any> {
    return this.http.post(`${environment.api}/users/login`, body);
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
