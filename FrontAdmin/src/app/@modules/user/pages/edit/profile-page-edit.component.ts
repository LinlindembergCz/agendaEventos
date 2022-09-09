import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/@bootstrap/services/toast.service';
import { UserCreateModel, UserUpdateModel } from '../../model/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import {FileService} from '../../services/file.service';
import { HttpEventType, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ValidEmail } from 'src/app/@shared/validators/mail.validator';

@Component({
  selector: 'app-profile-page-edit',
  templateUrl: './profile-page-edit.component.html',
  styleUrls: ['./profile-page-edit.component.scss']
})
export class ProfilePageEditComponent implements OnInit {

  public message: string;
  public progress: number;
  form: FormGroup;
  public secret2: string;
  picture: any ="assets/photos/semfoto.jpg";
  public userEntity: UserUpdateModel;

  private fileUrl: string = "senac2.png";
  public response: {dbPath: ''};

  sectors: any[] = [];
  companySize: any[] = [];


  constructor(private http: RequestPromiseService,
    private fileService: FileService,
    private route: ActivatedRoute,
    private router: Router,
    private _sanitizer: DomSanitizer,
    private toastr: ToastService
    ) {
      this.userEntity = new UserUpdateModel();

    }

   ngOnInit(): void {


    this.loadSector();
    this.loadCompany();
    this.route.paramMap.subscribe(params => {
      this.get( params.get('id') );

        });



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

  get(id: string): void {

    this.http.get<UserUpdateModel>(environment.services.api,`user/profile/${id}`)
      .then(
         data => { this.userEntity =data;
                    //console.log( data["value"] );
                   this.download();
                  });
  }

  public showErrorStatusCode = (message) =>
  {
     this.toastr.addSingle("error",'Ocorreu um erro de validação das informações.', message );
  }

  isValid(): boolean
  {
       var fieldsValues = ' '+this.userEntity.username+'?'+
                          ' '+this.userEntity.document+'?'+
                          ' '+this.userEntity.mail+'?'+
                          ' '+this.userEntity.uf+'?'+
                          ' '+this.userEntity.city+'?'+
                          ' '+this.userEntity.fone+'?'+
                          ' '+this.userEntity.companySizeId+'?'+
                          ' '+this.userEntity.sectorId+'?';

      return fieldsValues.indexOf('undefined?')==-1 && fieldsValues.indexOf(' ?')==-1;
  }

  save(): void
  {
      if ( !this.isValid() )
      {
        this.showErrorStatusCode("Preencha todos os campos!");
      }
      else
      {
      this.http.put<UserUpdateModel>(environment.services.api,"user", this.userEntity ).
      then(x => {
                  let id : string = this.userEntity.id;
                  this.router.navigate([`/user/show/${id}`]);

                }
          ).catch(x => { //console.log(x); 
          } );
      }
  }

  download(extention : string = ".jpg") {
    this.fileUrl = this.userEntity.username+extention;
    this.fileService.download(this.fileUrl).subscribe( (event) => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round((100 * event.loaded) / event.total);
      else if (event.type === HttpEventType.Response)
      {
        this.downloadFile(event);
      }
    }, (erro)=>{ if (extention==".jpg") this.download(".png") }
    );
  }

  private downloadFile(data: HttpResponse<Blob>) {
      const downloadedFile = new Blob([data.body], { type: data.body.type });
      const urlToBlob = window.URL.createObjectURL(downloadedFile);
      this.picture =  this._sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);
  }





}
