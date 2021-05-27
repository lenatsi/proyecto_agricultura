import { catchError } from 'rxjs/operators';
import { Plant } from './../../models/plant.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

constructor(private httpClient: HttpClient) { }

savePlant(Plant: Plant): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}/plant`, Plant).pipe(
    catchError((error) => {
      return error
    }),
  )
}
getPlant(_id: string): Observable<any> {
  return this.httpClient.get(`${environment.apiUrl}/plant/${_id}`).pipe(
    catchError((error) => {
      return error
    }),
  )
}
getPlants(filter:string): Observable<any> {
  const params = { filter:filter}
  return this.httpClient
    .get(`${environment.apiUrl}/plants`, { params:params })
    .pipe(
      catchError((error) => {
        return error
      }),
    )
}
updatePlant(Plant: Plant): Observable<any> {
  return this.httpClient
    .put(`${environment.apiUrl}/plant/${Plant._id}`, Plant)
    .pipe(
      catchError((error) => {
        return error
      }),
    )
}
deletePlant(_id: string): Observable<any> {
  return this.httpClient.delete(`${environment.apiUrl}/plant/${_id}`).pipe(
    catchError((error) => {
      return error
    }),
  )
}

}
