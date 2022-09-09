import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';
import { LoaderService } from 'src/app/@bootstrap/services/loader.service';

@Component({
  selector: 'app-contato-submit',
  templateUrl: './contato-submit.component.html',
  styleUrls: ['./contato-submit.component.scss']
})
export class ContatoSubmitComponent implements OnInit {

  public aFormGroup: FormGroup;
  public captchaOK: boolean;

  CountChar: number = 0;
  //siteKey gerado em :
  //https://www.google.com/recaptcha/admin/create
  // https://www.google.com/recaptcha/admin/site/484603106/settings?hl=pt-BR
  public siteKey: string = "6LcE2WUdAAAAAHuCbcgIzzdE0N0nRCa0DyVr18Tg";
  private checksum: string = "";


  constructor(private formBuilder: FormBuilder, private http :RequestPromiseService, private loader: LoaderService) {}

  ngOnInit() {
    this.captchaOK = false;
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required],
      sender_name:['', Validators.required],
      sender_mail:['', Validators.required],
      sender_subject:['', Validators.required],
      sender_message: ['', Validators.required]
    });

  }

  handleSuccess($event)
  {
    this.checksum = $event;
    this.captchaOK = $event!=null;
  }

  sendEmail()
  {
     if (this.captchaOK)
     {
        let obj: any = {
                         subject :this.aFormGroup.controls["sender_subject"].value,
                         body:this.aFormGroup.controls["sender_message"].value,
                         mail : this.aFormGroup.controls["sender_mail"].value,
                         name : this.aFormGroup.controls["sender_name"].value,
                         checksum: this.checksum
                       };

        this.loader.start();
        this.http.post(environment.services.api,"message/send/sugestion",obj).finally(() => {
          this.loader.end();
        });
     }
  }

  CountChars($event)
  {
    let text: string = this.aFormGroup.controls["sender_message"].value;
    this.CountChar = text.length;
  }

}



