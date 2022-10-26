import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

    @Input() visible: boolean = false;
    @Input() messageDialog: string = '';
    @Input() typeDialog: string = '';

  constructor() { }

  handleClick($event:any)
  {
    this.visible = false
    this.messageDialog = '';
    this.typeDialog= ''
  }
}