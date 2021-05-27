import { environment } from './../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TutorialesService {

constructor(private httpClient: HttpClient) { }

saveTutorial(Tutorial: Tutorial): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}/tutorial`, Tutorial).pipe(
    catchError((error) => {
      return error
    }),
  )
}
getTutorial(_id: string): Observable<any> {
  return this.httpClient.get(`${environment.apiUrl}/tutorial/${_id}`).pipe(
    catchError((error) => {
      return error
    }),
  )
}
getTutorials(filter:string): Observable<any> {
  const params = { filter:filter}
  return this.httpClient
    .get(`${environment.apiUrl}/tutorials`, { params:params })
    .pipe(
      catchError((error) => {
        return error
      }),
    )
}
updateTutorial(Tutorial: Tutorial): Observable<any> {
  return this.httpClient
    .put(`${environment.apiUrl}/tutorial/${Tutorial._id}`, Tutorial)
    .pipe(
      catchError((error) => {
        return error
      }),
    )
}
deleteTutorial(_id: string): Observable<any> {
  return this.httpClient.delete(`${environment.apiUrl}/tutorial/${_id}`).pipe(
    catchError((error) => {
      return error
    }),
  )
}

}
