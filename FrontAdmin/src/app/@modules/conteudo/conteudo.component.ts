import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent implements OnInit {


  conteudos:any[]=[]; 
  rascunhos: any[]=[];
  publicados: any[]=[]

  constructor(private router: Router,
    private http: RequestPromiseService
    )
  {}

  ngOnInit(): void {

    this.http.get<any[]>(environment.services.api,"ConteudoSebraeLab").
      then(x => {  
        console.log(x)
        this.conteudos = x;
        this.publicados = x.filter( f=>f.status !="Rascunho");
        this.rascunhos =x.filter( f=>f.status =="Rascunho");
                });

        /*this.publicados = [{descricao: "UFJF publica novo edital para vestibular e Pism para o Curso de Música"},
                        {descricao: "Pesquisa da Unicamp busca mapear dificuldades de surdos em serviços de saúde na Região Metropolitana de Campinas"},
                        {descricao: "Como vai funcionar a próxima edição do Sebraelab"},      
                        {descricao: "8 em cada 10 professores da rede pública relatou dificuldade em atender alunos com deficiência na pandemia, aponta pesquisa do Cetic"},] */
 
         /*this.rascunhos =[{descricao: "Como vai funcionar a próxima edição do Sebraelab"},      
                        {descricao: "8 em cada 10 professores da rede pública relatou dificuldade em atender alunos com deficiência na pandemia, aponta pesquisa do Cetic"},
                        {descricao: "UFJF publica novo edital para vestibular e Pism para o Curso de Música"},
                        {descricao: "Pesquisa da Unicamp busca mapear dificuldades de surdos em serviços de saúde na Região Metropolitana de Campinas"},] */
 

  }

  ShowNovoConteudo()
  {
    this.router.navigate(['/novopublicacao'])
  }

  showEditConteudo(id: string)
  {
    this.router.navigate([`/alterarpublicacao`], { queryParams: { id: id} } ) 
  }

  RemoveConteudo(id: string)
  {
    
  }

  applyFilter(tipopublicacao: string )
  {
    this.publicados = this.conteudos.filter( f=>f.status !="Rascunho" && f.tipopublicacao==tipopublicacao);
    this.rascunhos = this.conteudos.filter( f=>f.status =="Rascunho"  && f.tipopublicacao==tipopublicacao);
  }

  filterNoticias()
  {
    this.applyFilter( "Noticia");
  }

  filterEbooks()
  {
    this.applyFilter( "Ebook");
  }

  filterEditais()
  {
    this.applyFilter( "Edital");
  }

  filterOutros()
  {
    this.applyFilter( "Outro");
  }


}
