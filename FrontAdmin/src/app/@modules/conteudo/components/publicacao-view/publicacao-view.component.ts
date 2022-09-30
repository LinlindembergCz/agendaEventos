import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacao } from '../../../../@core/models/publicacao.model';
import { RequestPromiseService } from '../../../../../app/@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';



@Component({
  selector: 'app-publicacao-view',
  templateUrl: './publicacao-view.component.html',
  styleUrls: ['./publicacao-view.component.scss']
})
export class PublicacaoViewComponent implements OnInit 
{
  publicacao: Publicacao;

  constructor(
    private http: RequestPromiseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void 
  {
    this.route.queryParams.subscribe(params => {
                                     this.http.get<Publicacao>(environment.services.api,
                                     `ConteudoSebraeLab/${params['id']}`).
                                     then( e=> { 
                                                  this.publicacao = e 
                                               }); 
                                    });
  }
}
