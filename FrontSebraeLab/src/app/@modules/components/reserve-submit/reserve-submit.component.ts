import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';
import { EventBooking } from './model/EventBooking-model';

@Component({
  selector: 'app-reserve-submit',
  templateUrl: './reserve-submit.component.html',
  styleUrls: ['./reserve-submit.component.scss']
})
export class ReserveSubmitComponent implements OnInit {

  DialogEventDateShowing: Boolean = false;
  EventDaysFormated: Array<string>;
  EventDays: Array<string> ;
  EventPeriodo: Array<string> ;
  EventPeriodoFormated: Array<string>;

  EventHoraInico: Array<string>;
  EventHoraFim: Array<string> ;

  mensagem: string;
  diasEvento: string = '';

  showDialogAtencao: boolean = false;
  messageDialogAtencao: string ='';

  constructor(
    private http: RequestPromiseService,
    private router: Router
  ) {

  }

  ngOnInit(): void {   
  }

  showWarn(msg: string ) {
    this.showDialogAtencao = false
    this.messageDialogAtencao = msg;
    this.showDialogAtencao = true;
  }

  showDialogEventDate()
  {
    this.DialogEventDateShowing = true;
  }

  hideDialogEventDate()
  {
    this.DialogEventDateShowing = false;
  }

  verifyAvailability( p: any) 
  {

     this.mensagem= '';

      let url = environment.routes.eventoSebraeLab.alocacao+
              `?Data=${p.data}&horainicio=${p.horaInicio}&horafinal=${p.horaFim}`;

      this.http.get( environment.services.api, url).then( 
      (disponivel:boolean) =>
      {
          if (!disponivel)                      
          {
              this.mensagem=`Não é possível reservar o evento nesta data e hora ( ${p.data} - ${p.horaInicio} - ${p.horaFim} ) `                      
              //this.showWarn(this.mensagem);
              // this.showWarn(this.mensagem);
          }
      });        
  }

  public reserve(event: EventBooking): void
  {
    let j :number = 0;
    for (const e of  event.Days)
    {  
        const day  = ("00" + e.getDate()).slice(-2);
        const month =("00" + ( e.getMonth() + 1 ) ).slice(-2);
        const year = e.getFullYear();
        this.verifyAvailability(  { data:  day+ '/' + month+ '/' +year , horaInicio:event.HoursStart[j] , horaFim:event.HoursEnd[j]} );
        
        j++;
     };
      
     if (this.mensagem =='') 
     {
          let i :number = 0;
          this.EventDaysFormated=[];
          this.EventDays = [];
          this.EventPeriodo = [];
          this.EventPeriodoFormated=[];
          this.EventHoraInico=[];
          this.EventHoraFim=[];

          event.Days.forEach( 
          e=>{ 
                const day  = ("00" + e.getDate()).slice(-2);
                const month =("00" + ( e.getMonth() + 1 ) ).slice(-2);
                const year = e.getFullYear();
                const option = event.Options[i];
                const horaInicio =event.HoursStart[i];
                const horaFim =event.HoursEnd[i];

                this.EventDays.push( year + '/' + month+ '/' + day);
                this.EventDaysFormated.push( day+'/'+ month);
                this.EventPeriodo.push( option );
                this.EventPeriodoFormated.push( option + '('+ day +'/'+ month +')');
                this.EventHoraInico.push(horaInicio);
                this.EventHoraFim.push(horaFim);
                i++;
            })
      } 
     
  }

  showMeuEvento()
  {
    this.router.navigate([`meuevento`],
    { queryParams:{  
                    datas: [ JSON.stringify(this.EventDays)],
                    options: [ JSON.stringify(this.EventPeriodo)],
                    horasinicio: [ JSON.stringify(this.EventHoraInico)],
                    horasfim: [ JSON.stringify(this.EventHoraFim)],
                    nomeevento:'MEU EVENTO',
                    numeroparticipantes:'30'
                  } 
     } ); 
  }



}
