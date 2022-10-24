import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestPromiseService } from '../../../@shared/services/request-promise.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FileService } from '../../user/services/file.service';



@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsLetterComponent implements OnInit 
{


  constructor(
    private http: RequestPromiseService,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private fileService: FileService,
  ) { }

  ngOnInit(): void 
  {

  }




}
