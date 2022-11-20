import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ggm-t-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})

export class PasswordComponent implements OnInit {

  @Input() focus: boolean = false;
  @Input() showIcon: boolean = true;
  @Input() label: string;
  @Input() feedback: boolean;
  @Input() inputId: string;
  @Input() name: string;
  @Output() togglePassword: EventEmitter<boolean>;
  @Input() inputModel: string;
  @Output() inputModelChange = new EventEmitter<string>();

  password: any = [];

  showPassword: boolean = false;

  constructor(public translateService: TranslateService) { 
    this.translateService.get("password").toPromise().then(trans => {
      this.password = trans;
    });
  }

  ngOnInit(): void {
  }


  onTogglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.togglePassword !== undefined) {
      this.togglePassword.emit(this.showPassword);
    }
  }

}
