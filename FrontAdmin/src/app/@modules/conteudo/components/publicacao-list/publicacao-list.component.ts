import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestPromiseService } from '../../../../../app/@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';



@Component({
  selector: 'app-publicacao-list',
  templateUrl: './publicacao-list.component.html',
  styleUrls: ['./publicacao-list.component.scss']
})
export class PublicacaoListComponent implements OnInit 
{
  publicacoes: any[]=[];

  constructor(
    private http: RequestPromiseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void 
  {
     this.getInfo(); 
  }
  
  getInfo() 
  { 
      this.http.get<any[]>(environment.services.api,"ConteudoSebraeLab").
      then(x => { this.publicacoes=  x; });
  }

}
