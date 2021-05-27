import { ToDo } from './../../models/toDo.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

constructor(private httpClient: HttpClient) { }

saveToDo(ToDo: ToDo): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}/todo`, ToDo).pipe(
    catchError((error) => {
      return error
    }),
  )
}

feedToDo (): Observable<any> {
  return this.httpClient.get(`${environment.apiUrl}/todo`).pipe(
    catchError((error) => {
      return error
    }),
  )
}
toogleToDo(ToDo: ToDo): Observable<any> {
  return this.httpClient.put(`${environment.apiUrl}/todo/${ToDo._id}`, ToDo).pipe(
    catchError((error) => {
      return error
    }),
  )
}

deleteToDo(_id: string): Observable<any> {
  return this.httpClient.delete(`${environment.apiUrl}/todo/${_id}`).pipe(
    catchError((error) => {
      return error
    }),
  )
}
}
