import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastService } from '../../@bootstrap/services/toast.service';
import { UserContextService } from 'src/app/@bootstrap/services/user-context.service';


@Injectable({
  providedIn: 'root'
})

export class RequestPromiseService {

  constructor(
    private http: HttpClient,
    private toastr: ToastService,
    private userContext: UserContextService
  ) { }



  private showErrorStatusCode = (status: number, error: any) => {
    //console.log(error);
    switch (status) {
      case 400:
        if(error.errors !== undefined && error.errors !== null) {
          let porperties = Object.getOwnPropertyNames(error.errors);
          porperties.forEach(element => {
            Reflect.get(error.errors,element).forEach(x => this.toastr.addSingle("error",x, x));
          });
        } else {
          this.toastr.addSingle("error",'Ocorreu um erro de validação das informações.', 'Ocorreu um erro de validação das informações.');
        }
        break;
      case 201:
        this.toastr.addSingle("success","Sucesso!",'Informação registrada com sucesso.');
        break;
      case 204:
        this.toastr.addSingle("success","Sucesso!",'Operação realizada com sucesso.');
        break;
      case 404:
          this.toastr.addSingle("warning","Não encontrado",'As informações não consta na base de dados');
          break;
      case 409:
          this.toastr.addSingle("warning","Conflito!",'Os dados enviados já constam.');
          break;
      case 403:
        this.toastr.addSingle("warning","Acesso negado",'Você não possui permissão para realizar está operação.');
        break;
      case 500:
        this.toastr.addSingle("error","Erro de processamento",'As informações não estão coesas e geraram erro na aplicação.');
        break;
    }
  }

  public EnableAuth() { this.userContext.EnableToken() };
  public DisableAuth() { this.userContext.DisableToken() };

  public SetUser( user : any )
  {
    this.userContext.setUser( user );
  }

  public GetUser ()
  {
    return this.userContext.user$.value
  }

  get<T>(url: string, path: string) : Promise<T> {
     let promise = new Promise<T>((resolve, reject) => {
        this.http.get<T>(`${url}/${path}`).toPromise()
        .catch((response) => {
          this.showErrorStatusCode(response.status, response.error);
        })
        .then(
          (data: T) => {
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

  getPaginated<T>(url: string, path: string) : Promise<T> {
    let promise = new Promise<T>((resolve, reject) => {
       this.http.get<T>(`${url}/${path}`).toPromise()
       .catch((response) => {
         this.showErrorStatusCode(response.status, response.error);
       })
       .then(
         (data: T) => {
            resolve(data);
             return data;
         },
         (err: any) => {
           reject(err);
         }
       );
    });
    return promise;
 }

  post<T>(url: string, path: string, payload: any) : Promise<T> {
    let promise = new Promise<T>((resolve, reject) => {
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
    return promise;
 }

 put<T>(url: string, path: string, payload: any) : Promise<T> {
  let promise = new Promise<T>((resolve, reject) => {
     this.http.put<T>(`${url}/${path}`, payload).toPromise()
     .catch((response) => {
       this.showErrorStatusCode(response.status, response.error);
     })
     .then(
       (data: T) => {
            resolve(data);
       },
       (err: any) => {
         reject(err);
       }
     );
  });
  return promise;
}

delete<T>(url: string, path: string, payload: any) : Promise<T> {
  let promise = new Promise<T>((resolve, reject) => {
     this.http.delete<T>(`${url}/${path}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).toPromise()
     .catch((response) => {
       this.showErrorStatusCode(response.status, response.error);
     })
     .then(
       (data: T) => {
           resolve(data);
       },
       (err: any) => {
         reject(err);
       }
     );
  });
  return promise;
}

}
