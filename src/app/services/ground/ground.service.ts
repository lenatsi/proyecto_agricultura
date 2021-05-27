import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Ground } from './../../models/ground.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroundService {

constructor(private httpClient: HttpClient) { }

stepOne(Ground: Ground): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}/groundone`, Ground).pipe(
    catchError((error) => {
      return error
    }),
  )
}

stepTwo(Ground: Ground): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}/groundtwo`, Ground).pipe(
    catchError((error) => {
      return error
    }),
  )
}

stepThree(Ground: Ground): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}/groundtree`, Ground).pipe(
    catchError((error) => {
      return error
    }),
  )
}

stepFour(Ground: Ground): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}/groundfour`, Ground).pipe(
    catchError((error) => {
      return error
    }),
  )
}

}
