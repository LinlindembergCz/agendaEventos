import { Component, OnInit } from '@angular/core';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {JWTTokenService} from '../../services/jwt.service';
import { User } from 'src/app/@core/models/struct/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public captchaOK: boolean;
  public login = {userName:"" ,secret:""};
  mensagem: string;

  constructor(private http: RequestPromiseService,
              private router: Router,
              ) {

   }

  ngOnInit(): void {
    this.captchaOK = false;
    this.login = {userName:"" ,secret:""};
  }

  siteKey: string = "6LfidOIcAAAAAF5PKrrnckMEG3CfBgkzfH_ce5UA";

  handleSuccess($event)
  {
    //this.captchaOK = $event!=null;
  }


  logIn(): void {
      this.mensagem = '';
      //this.router.navigate(['index']);
      if ( this.login.userName.length > 0  && this.login.secret.length > 0 )
      {
          this.http.post(environment.services.api,
                            "usuario",
                            {   id:'033F87D1-CD94-4829-AF6D-652915C6260F',
                                login: this.login.userName,
                                senha: this.login.secret
                            }).then( () => {
                                var user : any = new User(this.login.userName);
                                this.http.SetUser( user );
                                this.router.navigate(['index']);
                            }).catch( (e) => {
                                this.mensagem = 'Usuário não autorizado!';
                        });
      }
  }



  openUser() {
    //this.router.navigate(['/user']);
  }

  forgetedPassword() {
   // this.router.navigate(['/forgeted']);
  }


}
