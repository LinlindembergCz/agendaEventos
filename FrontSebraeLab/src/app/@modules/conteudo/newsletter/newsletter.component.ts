import {  Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RequestPromiseService } from '../../../@shared/services/request-promise.service';
import { Newsletter } from '../../../@core/models/newsletter.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsLetterComponent implements OnInit 
{

   inscricao: Newsletter = new Newsletter();

   @Output() clickHide = new EventEmitter<void>();

   @Output() clickSave = new EventEmitter<Newsletter>();

  constructor(
    private http: RequestPromiseService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void 
  {

  }

  save(): void
  {
    this.clickSave.next(this.inscricao);
    this.clickHide.next(); 
  }




}
