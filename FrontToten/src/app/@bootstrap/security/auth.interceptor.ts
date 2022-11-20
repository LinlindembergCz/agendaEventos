import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { UserContextService } from '../services/user-context.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private userContextService: UserContextService
        ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var user = this.userContextService.user$.getValue();
        var disable = this.userContextService.disableToken$.getValue();
        if (!disable && user?.token !== null && user?.token !== undefined) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + user.token)
            });
            return next.handle(clonedReq).pipe(
                tap(
                    succ => { },
                    err => {
                        if (err.status == 401) {
                            this.userContextService.logout();
                        }
                    }
                )
            )
        }
        else
            return next.handle(req.clone());
    }
}