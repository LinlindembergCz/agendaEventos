import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';
import { EventBooking } from '../reserve-submit/model/EventBooking-model';


interface Period {
  index: number;
  name:string;
  data: string; 
  horaInicio: string;
  horaFim: string;
  option:string;
}

@Component({
  selector: 'app-calendario-edit',
  templateUrl: './calendario-edit.component.html',
  styleUrls: ['./calendario-edit.component.scss']
})
export class CalendarioEditComponent implements AfterViewInit, OnInit {
        
  @Input() public eventBooking : EventBooking = new EventBooking()  
  
  periodos: Period[]=[];

  @Output() clickSelect = new EventEmitter<Period[]>();
  
  @Input() ShowButtobAplly:boolean = false;

  mensagens: any[]=[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: RequestPromiseService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {   
    console.log( 'ngOnInit' )
  }

  ngAfterViewInit()
  {    console.log( 'ngAfterViewInit' )
       this.route.queryParams.subscribe(
          params =>{  if (params['datas'])
                      {
                        let datasArray:Array<string> = JSON.parse(params['datas']);
                        let OptionsArray:Array<string> = JSON.parse(params['options']);
                        let HoraInicioArray:Array<string> = JSON.parse(params['horasinicio']);
                        let HoraFimArray:Array<string> = JSON.parse(params['horasfim']);
                        let i :number = 0;
                        datasArray.forEach(data =>{ 
                                                    const date = new Date(data)
                                                    this.eventBooking.Days.push(date);
                                                    this.eventBooking.Options.push(OptionsArray[i]);
                                                    this.eventBooking.HoursStart.push(HoraInicioArray[i]);
                                                    this.eventBooking.HoursEnd.push(HoraFimArray[i]);                                                
                                                    this.selectDate(date);  
                                                    i++;
                                                  })
                   
                      }
                    })
  }

  
  selectDate(e)
  {    
    this.periodos=[];
    
    if (this.eventBooking.Days!=null)
    {
      let i = 0;
      this.eventBooking.Days.forEach( 
      d =>{  
              this.periodos.push(
                                  {
                                    index: i, 
                                    name:'periodo'+i, 
                                    data:d.toLocaleDateString(), 
                                    horaInicio:this.eventBooking.HoursStart[i], 
                                    horaFim:this.eventBooking.HoursEnd[i],
                                    option: this.eventBooking.Options[i]
                                  }
                                );
              i=i+1;
          });
    }
    this.clickSelect.next(this.periodos);
  }

  isDaySelected(e)
  {
    return this.eventBooking.Days.find(d => d.getDay() == e.day);    
  }

  verifyAvailability( p: any) 
  {

    this.mensagens= [];
      let url = environment.routes.eventoSebraeLab.alocacao+
              `?Data=${p.data}&horainicio=${p.horaInicio}&horafinal=${p.horaFim}`;
      this.http.get( environment.services.api, url).then( 
      (disponivel:boolean) =>
      {
          if (!disponivel)                      
          {                               
              this.messageService.add({severity:'warn', summary:'Indisponibilidade', detail:`Não é possível reservar o evento nesta data e hora ( ${p.data} - ${p.horaInicio} - ${p.horaFim} ) `});
          }
      });        
  }

  onBlur( periodo: any )
  {
    if ( (periodo.horaInicio && periodo.horaInicio!='' && periodo.horaInicio!='__:__') && 
         (periodo.horaFim    && periodo.horaFim!=''    && periodo.horaFim!='__:__') )
    {
      this.verifyAvailability(  { data:  periodo.data , horaInicio:periodo.horaInicio, horaFim:periodo.horaFim} );
    }
       
  }



}
