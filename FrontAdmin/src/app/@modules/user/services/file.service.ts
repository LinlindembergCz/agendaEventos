import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private url = environment.services.api;

  constructor(private http: HttpClient) {}

  public download(fileUrl: string) {
    return this.http.get(`${this.url}/download/image?fileUrl=${fileUrl}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob',
    });
  }

  public upload (image_file: any)
  {

  }


}
