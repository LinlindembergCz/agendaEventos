import { Component, Input, OnInit } from '@angular/core';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/@bootstrap/services/toast.service';
import { UserCreateModel } from 'src/app/@modules/user/model/user.model';
import { ValidEmail } from 'src/app/@shared/validators/mail.validator';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-profile-page-new',
  templateUrl: './profile-page-new.component.html',
  styleUrls: ['./profile-page-new.component.scss']
})
export class ProfilePageNewComponent implements OnInit {


  public secret2: string;
  showDialog: boolean = false;

  public ufsList: [{id:0,sigla:"",nome:"",regiao:{id:1,sigla:"",nome:""}}];
  public cityList: [{id:0,nome: "",microrregiao:{id:0,nome:"",mesorregiao:{id:0,nome:"",UF:{id:24,sigla:"",nome:"",regiao:{id:0,sigla:"",nome:""}}}}}];

  public userEntity: UserCreateModel;

  sectors: any[] = [];
  companySize: any[] = [];

  constructor(private http: RequestPromiseService, private router: Router,
    private toastr: ToastService,
    ) {}

  ngOnInit(): void {


    this.userEntity =  new UserCreateModel();
    this.userEntity.city= "SELECIONE";
    this.userEntity.uf = "RS";
     this.loadSector();
     this.loadCompany();

     this.ToListUFs();
     this.ToListCities(this.userEntity.uf);
  }

  hideModalReload() {
    this.showDialog = false;
  }

  showTerms() {
    this.showDialog = true;
  }

  loadCompany() {

    this.http.getPaginated(environment.services.api,"codedata/sector").then(x => {
       if(x !== undefined && x['records'] !== undefined) {
         var select = { "name": "Selecione", id: "" }
         this.sectors = [select].concat(x['records']);
       }
    }).finally(() => {
    });
  }

  loadSector() {

    this.http.getPaginated(environment.services.api,"codedata/companySize").then(x => {
       if(x !== undefined && x['records'] !== undefined) {
        var select = { "name": "Selecione", id: "" }
        this.companySize = [select].concat(x['records']);
       }
    }).finally(() => {
    });
  }


  public showErrorStatusCode = (message) =>
  {
     this.toastr.addSingle("error",'Ocorreu um erro de validação das informações.', message );
  }


  isValid(): boolean
  {
      var fieldsValues = ' '+this.userEntity.username+'?'+
                          ' '+this.userEntity.secret+'?'+
                          ' '+this.userEntity.document+'?'+
                          ' '+this.userEntity.mail+'?'+
                          ' '+this.userEntity.uf+'?'+
                          ' '+this.userEntity.city+'?'+
                          ' '+this.userEntity.fone+'?'+
                          ' '+this.userEntity.companySizeId+'?'+
                          ' '+this.userEntity.sectorId+'?';


      return fieldsValues.indexOf('undefined?')==-1 && fieldsValues.indexOf(' ?')==-1;
  }


  save(): void {

    const regex = /[0-9]/;
    const regex2 = /[A-Z]/;

    if (!this.isValid())
    {
      this.showErrorStatusCode("Preencha todos os campos");
    }
    else if (this.userEntity.secret=="" ||
             this.userEntity.secret != this.secret2 ||
             this.userEntity.secret.length < 6 ||
             !regex.test(this.userEntity.secret.toUpperCase()) ||
             !regex2.test(this.userEntity.secret.toUpperCase())
             )
    {
      this.showErrorStatusCode("Senha informada não confere ou não é válida!");
    } else
    {
     // console.log(this.userEntity );
    this.http.post<UserCreateModel>(environment.services.api,"user", this.userEntity ).
    then(x => {

               this.toastr.addSingle("success","Registro!",'Usuário registrado com sucesso.');
               let id : string = x["value"].id;
               this.router.navigate([`/user/login`]);
              }

          ).catch(x => { //console.log(x); 
          } );
    }

  }


  ToListUFs()
  {
    this.http.get<any>("https://servicodados.ibge.gov.br/api/v1/localidades/estados","").
    then( (u)=>{
       this.ufsList =  u.filter(x => {
              if(x.id !== undefined && x.nome !== undefined && x.id !== 0 && x.nome !== "" && x.sigla !== "")
                  return x;
        });
        this.ufsList.sort((a,b) => a.nome.localeCompare(b.nome));
       //this.ufsList.unshift({id:0,sigla:"",nome:"",regiao:{id:1,sigla:"",nome:""}});
     }).finally(() => {
        if(this.userEntity.uf === undefined) {
          this.userEntity.uf = "RS";
          this.ToListCities("RS");
        }
     });
  }

  ToListCities(sigla: any)
  {
    this.http.get<any>("https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+sigla+"/municipios","").
    then( (c)=>{
        this.cityList =  c.filter(x => {
              if(x.id !== undefined && x.nome !== undefined && x.id !== 0 && x.nome !== "")
                return x;
        });
        this.cityList.sort((a,b) => a.nome.localeCompare(b.nome));
          if(sigla === "RS")
            this.userEntity.city = "Porto Alegre";
       });

  }

}
