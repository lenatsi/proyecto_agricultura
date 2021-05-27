import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tip } from './../../models/tip.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor(private httpClient: HttpClient) { }

  saveTip(Tip: Tip): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/tip`, Tip).pipe(
      catchError((error) => {
        return error
      }),
    )
  }
  getTip(_id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/tip/${_id}`).pipe(
      catchError((error) => {
        return error
      }),
    )
  }
  getTips(filter:string): Observable<any> {
    const params = { filter:filter}
    return this.httpClient
      .get(`${environment.apiUrl}/tips`, { params:params })
      .pipe(
        catchError((error) => {
          return error
        }),
      )
  }
  updateTip(Tip: Tip): Observable<any> {
    return this.httpClient
      .put(`${environment.apiUrl}/tip/${Tip._id}`, Tip)
      .pipe(
        catchError((error) => {
          return error
        }),
      )
  }
  deleteTip(_id: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/tip/${_id}`).pipe(
      catchError((error) => {
        return error
      }),
    )
  }

}
