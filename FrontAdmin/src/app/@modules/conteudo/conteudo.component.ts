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
    this.loadConteudos();
  }

  loadConteudos(): void {
    this.http.get<any[]>(environment.services.api,"ConteudoSebraeLab").
      then(x => {  
                  console.log(x)
                  this.conteudos = x;
                  this.publicados = x.filter( f=>f.status !="Rascunho");
                  this.rascunhos =x.filter( f=>f.status =="Rascunho");                 
                });
  }

  ShowNovoConteudo()
  {
    this.router.navigate(['/novopublicacao'])
  }

  showEditConteudo(id: string)
  {
    this.router.navigate([`/alterarpublicacao`], { queryParams: { id: id} } ) 
  }

  removeConteudo(id: string)
  {
    this.http.delete(environment.services.api,`ConteudoSebraeLab/${id}`,null).finally
    ( ()=>{ this.loadConteudos(); })   
  }

  applyFilter(tipopublicacao: string )
  {
    this.publicados = this.conteudos.filter( f=>f.status !="Rascunho" && f.tipopublicacao==tipopublicacao);
    this.rascunhos = this.conteudos.filter( f=>f.status =="Rascunho"  && f.tipopublicacao==tipopublicacao);
  } 


}
