import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';



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

  ngOnInit(): void {
     this.getInfo(); 
  }
  
  getInfo() 
  { 

    /*this.publicacoes=  [{descricao: "UFJF publica novo edital para vestibular e Pism para o Curso de Música"},
    {descricao: "Pesquisa da Unicamp busca mapear dificuldades de surdos em serviços de saúde na Região Metropolitana de Campinas"},
    {descricao: "Como vai funcionar a próxima edição do Sebraelab"},      
    {descricao: "8 em cada 10 professores da rede pública relatou dificuldade em atender alunos com deficiência na pandemia, aponta pesquisa do Cetic"},] 
    */
      this.http.get<any[]>(environment.services.api,"ConteudoSebraeLab").
      then(x => {  
                  this.publicacoes=  x;
                });
  }

}
