// httpcancel.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class HttpCancelService {

    private pendingHTTPRequests$ = new Subject<void>();

  constructor(private loaderService: LoaderService) { }

  public cancelPendingRequests() {
    this.loaderService.forceEnd();
    this.pendingHTTPRequests$.next();
  }

  public onCancelPendingRequests() {
    return this.pendingHTTPRequests$.asObservable();
  }
}