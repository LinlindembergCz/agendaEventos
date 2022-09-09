import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import {  User } from "src/app/@core/models/struct/user.model";
import { SessionService } from './session.service';

const defaultUser = null;

@Injectable({
    providedIn: 'root',
})
export class UserContextService {
    public user$ = new BehaviorSubject<User>(defaultUser);
    public disableToken$ = new BehaviorSubject<boolean>(false);
    
    constructor(private sessionService: SessionService, private router: Router) {
        var data = this.sessionService.getItem("user_data");
        if (data != null) {
            this.user$.next(data);
        }
    }
    
    public EnableToken() {
        this.disableToken$.next(false);
    }

    public DisableToken() {
        this.disableToken$.next(true);
    }

    public setUser(user: User) {
        this.sessionService.setItem("user_data", user);
        this.user$.next(user);       
    }

    public setToken(value: string) {
        var data = this.sessionService.getItem("user_data");
        data.token = value;
             
    }

    public logout() {
       this.sessionService.clear();
        this.user$.next(defaultUser);
        
    }

    public login() {
        this.router.navigate(['/user/login']);
         
     }
}