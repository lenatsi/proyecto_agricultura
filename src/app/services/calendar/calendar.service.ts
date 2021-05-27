import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Calendar } from './../../models/calendar.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

constructor(private httpClient: HttpClient) { }

saveCalendar(Calendar: Calendar): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}/calendar`, Calendar).pipe(
    catchError((error) => {
      return error
    }),
  )
}

feedCalendar (): Observable<any> {
  return this.httpClient.get(`${environment.apiUrl}/calendar`).pipe(
    catchError((error) => {
      return error
    }),
  )
}
}
