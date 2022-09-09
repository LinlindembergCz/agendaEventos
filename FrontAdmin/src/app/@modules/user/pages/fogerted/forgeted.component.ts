import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';
import { UserForgetedModel, UserUpdateModel } from '../../model/user.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-forgeted',
  templateUrl: './forgeted.component.html',
  styleUrls: ['./forgeted.component.scss']
})
export class ForgetedComponent implements OnInit {

  @Input() Email = {sender_email:"" };

  public MessageFinal: string ='';

   //siteKey gerado em :
  //https://www.google.com/recaptcha/admin/create
  // https://www.google.com/recaptcha/admin/site/484603106/settings?hl=pt-BR
  public siteKey: string = "6LcE2WUdAAAAAHuCbcgIzzdE0N0nRCa0DyVr18Tg";
  private checksum: string = "";
  public captchaOK: boolean;


  constructor(
              private http :RequestPromiseService ,
              @Inject(DOCUMENT) private document: Document
   ) { }

  ngOnInit(): void {
    this.Email = {sender_email:"" };
  }

  handleSuccess($event)
  {
    this.checksum = $event;
    this.captchaOK = $event!=null;
  }



  sendEmail(): void
  {

     this.http.get<UserForgetedModel>(environment.services.api,`user/mail/${this.Email.sender_email}/${this.checksum}`)
     .then(

              //  data => {

              //  var urlBrowser = this.document.location.href;
              //  var url = urlBrowser.substring(0, urlBrowser.indexOf('forgeted')-1);

              //  let obj: any = { subject :'Solicitar senha',
              //                   body:`Olá ${data.username},<br><br><br>
              //                   Você esqueceu sua senha? Sem problemas!<br>
              //                   Para definir uma nova senha clique abaixo:<br><br><br>
              //                   <a style="border-radius:4px;display:inline-block;
              //                   font-size:14px;font-weight:bold;line-height:24px;
              //                   padding:12px 24px;text-align:center;text-decoration:none!
              //                   important;color:#ffffff!important;background-color:#3d8cdb;
              //                   font-family:Avenir,sans-serif"
              //                   href="${url}/reset/${data.id}/${data.lastToken}" target="_blank">
              //                   DEFINIR NOVA SENHA
              //                   </a>`,
              //                   mailFrom : 'lindemberg.cortez@gmail.com',
              //                   fromName : 'Representa+',
              //                   mailTo   : data.mail,
              //                   toName   : data.username,
              //                   hasSend  : true };

              //   this.http.post(environment.services.api,"message/send",obj).finally(
              //    () => {this.MessageFinal = "Estamos quase lá! Agora verifique seu e-mail para resetar sua senha."; }
              //   )
              //  }
          )
  }

}
