import { Component, OnInit,  AfterViewInit} from '@angular/core';

interface TipoEvento {
  code: string,
  name: string   
}

class Period {
  index: number;
  id:string;
  name:string;
  data: string; 
  horaInicio: string;
  horaFim: string;
  option:string;
}

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.scss']
})
export class EventoCreateComponent implements OnInit, AfterViewInit {

  indexComponent:number=0;
  periodos: Period[]=[];

  imagemPersonalizada: boolean = false;

  tiposEnvento:TipoEvento[];
  optionDate: string;
  tipoEvento: string;
  nomeEvento: string;
  numeroParticipantes: string;

  constructor() { }

  ngOnInit(): void {
    this.tiposEnvento = [{name: 'Palestra', code: '1'},
                         {name: 'Workshop', code: '2'},
                         {name: 'Curso', code: '3'},
                         {name: 'Evento Fechado', code: '4'},
                         {name: 'Outros', code: '5'}] 
  }

  ngAfterViewInit()
  {  
    //this.adcionarDia()
  }

  adicionarDia()
  {
    this.periodos.push( {
        index:0,
        id:`data${this.indexComponent}`,
        name:`data${this.indexComponent}`,
        data: '2022/09/09',
        horaInicio: '00:00',
        horaFim: '00:00',
        option:''}) 

    this.indexComponent++;
    console.log(this.periodos)
  }

  removerDia()
  {
    this.periodos.pop();
  }

}
