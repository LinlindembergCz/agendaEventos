import { Component, Input, OnInit } from '@angular/core';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/@bootstrap/services/toast.service';
import { UserCreateModel, UserUpdateModel } from 'src/app/@modules/user/model/user.model';
import { JWTTokenService } from '../../services/jwt.service';
import { LoaderService } from 'src/app/@bootstrap/services/loader.service';
import { UserContextService } from 'src/app/@bootstrap/services/user-context.service';



@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  private id: string;
  private token: string;

  public  secret: string;
  public  secret2: string;

  public userEntity: UserUpdateModel;

   //siteKey gerado em :
  //https://www.google.com/recaptcha/admin/create
  // https://www.google.com/recaptcha/admin/site/484603106/settings?hl=pt-BR
  public siteKey: string = "6LcE2WUdAAAAAHuCbcgIzzdE0N0nRCa0DyVr18Tg";
  private checksum: string = "";
  public captchaOK: boolean;




  constructor(private http: RequestPromiseService,
              private jwtservice: JWTTokenService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastService,
              private userContextService: UserContextService
              
    ) {
      this.userEntity =  new UserUpdateModel();

    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id    = params.get('id');
      this.token = params.get('code');
      this.get( this.id );
    });
  }

  get(id: string): void {

    this.http.get<UserUpdateModel>(environment.services.api,`user/profile/${id}`)
      .then(
         data => { this.userEntity =data["value"];  });
  }

  public showErrorStatusCode = (message) =>
  {
     this.toastr.addSingle("error",'Ocorreu um erro de validação das informações.', message );
  }

  handleSuccess($event)
  {
    this.checksum = $event;
    this.captchaOK = $event!=null;
  }

  save(): void {

    const regex = /[0-9]/;
    const regex2 = /[A-Z]/;

    this.userEntity.secret = this.secret;
    
    //Atualizar token do Header
    this.userContextService.setToken(this.token.toString() );

    if (this.userEntity.secret=="" ||
               this.userEntity.secret != this.secret2 ||
               this.userEntity.secret.length < 6 ||
               !regex.test(this.userEntity.secret.toUpperCase()) ||
               !regex2.test(this.userEntity.secret.toUpperCase())
               )
    {
      this.showErrorStatusCode("Senha informada não confere ou não é válida!");
    } else
    {
     this.http.put<UserUpdateModel>( environment.services.api,"user", this.userEntity ).
     then(x => {
                  this.toastr.addSingle("success","Registro!",'Senha alterada com sucesso.');
                  this.router.navigate([`/user/login`]);
               }
          ).catch(x => { //console.log(x); 
          } );
    }

  }

}
