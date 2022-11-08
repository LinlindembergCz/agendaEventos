import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private url = environment.services.api;

  public bypassSecurityTrustResourceUrl:SafeResourceUrl;

  constructor(private http: HttpClient, 
    private _sanitizer: DomSanitizer) {}

  public download(origem: string,fileUrl: string) {
    return this.http.get(`${this.url}/download/image/${origem}?fileUrl=${fileUrl}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }

  public downloadSecurity(origem: string, fileUrl: string, extention : string = ".png")
  {
    this.bypassSecurityTrustResourceUrl = '';
    
    console.log(fileUrl)

     return this.download(origem, fileUrl + extention).subscribe( 
           (image: any)=>
           {        
              if (image.type === HttpEventType.Response)
              { 
                  const downloadedFile = new Blob([image.body], { type: image.body.type });
                  const urlToBlob = window.URL.createObjectURL(downloadedFile);    
                  this.bypassSecurityTrustResourceUrl = this._sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);
              }
           }, 
           (erro)=>
           { 
              this.bypassSecurityTrustResourceUrl = '';
           }
    );
   

  }


  public upload (image_file: any)
  {

  }


}
