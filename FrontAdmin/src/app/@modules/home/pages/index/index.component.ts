import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  itens: any[] = []; 

  publicacoes: any[]=[]

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.itens = [
        { name: "PROJETO A"},
        { name: "PROJETO B"},
        { name: "PROJETO C"},
        { name: "PROJETO D"},
        { name: "PROJETO E"},
        { name: "PROJETO F"},
        { name: "PROJETO G"},
        { name: "PROJETO H"},
    ]

    this.publicacoes = [{descricao: "Como vai funcionar a próxima edição do Sebraelab"},      
                        {descricao: "8 em cada 10 professores da rede pública relatou dificuldade em atender alunos com deficiência na pandemia, aponta pesquisa do Cetic"},
                        {descricao: "UFJF publica novo edital para vestibular e Pism para o Curso de Música"},
                        {descricao: "Pesquisa da Unicamp busca mapear dificuldades de surdos em serviços de saúde na Região Metropolitana de Campinas"}] 
  }

  
  showAgenda() {
    this.router.navigate(['agenda']);
  }

}
