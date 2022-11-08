import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class RequestPromiseService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, path: string) : Promise<T> {

    /*const httpOptions = {headers: new HttpHeaders({ 
      "Content-Type":  "application/json",
      "Accept": "application/json",
      'Access-Control-Allow-Origin':'*', 
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS' })};*/

     let promise = new Promise<T>((resolve, reject) => {
        this.http.get<T>(`${url}/${path}`).toPromise()
        .catch((response) => {
          console.log(response);
        })
        .then(
          (data: T) => {
              console.log(data);
              let response = data['records'] !== undefined ? data['records'] : data;
              resolve(response);
              return response;
          },
          (err: any) => {
            reject(err);
          }
        );
     });
     return promise;
  }

  post<T>(url: string, path: string, payload: any) : Promise<T> {

    return this.http.post<T>(`${url}/${path}`, payload).toPromise();
    /* let promise = new Promise<T>((resolve, reject) => {
       this.http.post<T>(`${url}/${path}`, payload).toPromise()
       .catch((response) => {
         this.showErrorStatusCode(response.status, response.error);
       })
       .then(
         (data: T) => {
          if(data !== undefined && data !== null)
              resolve(data);
          else
              reject(data);
         },
         (err: any) => {
           reject(err);
         }
       );
    });
    return promise;*/
 }
}
