import { Component, OnInit } from '@angular/core';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {JWTTokenService} from '../../services/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public captchaOK: boolean;
  public login = {userName:"" ,secret:""};

  constructor(private http: RequestPromiseService,
              private router: Router,
              private jwtservice: JWTTokenService
              ) {

   }

  ngOnInit(): void {
    this.captchaOK = false;
    this.login = {userName:"" ,secret:""};
  }

  siteKey: string = "6LfidOIcAAAAAF5PKrrnckMEG3CfBgkzfH_ce5UA";

  handleSuccess($event)
  {
    this.captchaOK = $event!=null;
  }


  LogIn(): void {
      if ( this.captchaOK && this.login.userName.length > 0  && this.login.secret.length > 0 )
      {
         this.http.post(environment.services.api,
                     "user/auth",
                     {
                      userName: this.login.userName ,
                      secret: this.login.secret
                     }).then( auth => {

                       this.jwtservice.setToken(auth["token"]);
                       this.jwtservice.decodeToken;

                      /* let  user = { authenticationId: "123",
                                     userId: this.jwtservice.getUser(),
                                     personId: this.jwtservice.getUser(),
                                     userName: this.jwtservice.getUserName(),
                                     name: this.jwtservice.getUserName(),
                                     token: this.jwtservice.jwtToken,
                                     expirationAt: new Date(this.jwtservice.getExpiryTime()),
                                     isExpired: true,
                                     thumbnailPhoto:"" };*/
                      
                      var user = {};
                      Object.assign(user, auth);
                      this.jwtservice.setToken(user['token'].toString());

                      this.http.SetUser( user );
                      

                      this.router.navigate([`/user/show/${user['userId']}`]);

                    });
       }
  }



  openUser() {
    this.router.navigate(['/user']);
  }

  forgetedPassword() {
    this.router.navigate(['/forgeted']);
  }


}
