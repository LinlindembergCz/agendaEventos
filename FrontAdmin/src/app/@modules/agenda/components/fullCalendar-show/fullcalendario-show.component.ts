import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { EventBooking } from '../reserve-submit/model/EventBooking-model';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { Eventolab } from '../../../../@core/models/eventolab.model';
import { Bloqueador } from '../../../../@core/models/bloqueador.model';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';
import { DiasBloqueado } from '../../../../@core/models/diasBloqueados.model';


export class EventBooking {
  Days?: Date[]=[];
}

@Component({
  selector: 'app-fullcalendario-show',
  templateUrl: './fullcalendario-show.component.html',
  styleUrls: ['./fullcalendario-show.component.scss']
})
export class FullCalendarioShowComponent implements OnInit {
        
  @Input() events: any[];
  options: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  header: any;

  tiposEvento:any[]=[];

  motivoBloqueio: string='motivo do bloqueio';

  @Input() public diasBloqueados: Date[]=[new Date()];

  @Output() clickBloqueio = new EventEmitter<Bloqueador>();

  DialogEventDateShowing:boolean = false;

  constructor(
    private http: RequestPromiseService,
    private router: Router   
    ){}   

  ngOnInit(): void {   
    this.loadTipoEventos();      

    this.loadDiasBloqueados();

    this.loadEventos();     
  }

  ShowNovoEvento()
  {
    this.router.navigate(['/novoevento']);
  }

  loadTipoEventos()
  {
    this.http.get<any>("../../../assets/data", "tipoEventos.json").
    then(x => { this.tiposEvento = x; }); 
  }

  loadDiasBloqueados()
  {
    this.http.get<any[]>(environment.services.api,environment.routes.eventoSebraeLab.diasBloqueados).
    then(x=>{
      this.diasBloqueados = []
      //this.motivoBloqueio = x.motivo;
      x.forEach(d=> {                       
                       this.diasBloqueados.push(new Date(d.data))                       
                    })
      });
  }


  loadEventos() 
  {
    let eventos :any[]=[];
    const colors =["yellow", "green",  "blue", "red","orange"];

    this.http.get<Eventolab[]>(environment.services.api,environment.routes.eventoSebraeLab.root).then
    ( e=>{        
          e.forEach( d=>{       
              d.dias.forEach( x=>{
                      let data =  String(x.data).substring(0,10)
                      eventos.push( {                           
                        title: `${x.horainicio} - ${x.horafim}`,
                        date: data,
                        color: colors[this.tiposEvento.findIndex(x=>x.name==d.tipoevento)]                                    
                      })
                  })           
                })
          }).finally(
            ()=>{
             this.options = { height: '550px',
                              headerToolbar: {left: 'prev',center: 'title',right: 'next'},
                              editable: false,
                              selectable:true,
                              selectMirror: true,
                              dayMaxEvents: true,
                              locale:['pt-BR'],
                              events: eventos,                  
                              };
            }
          )
  }

  showDialogEventDate()
  {
    this.DialogEventDateShowing = true;
  }

  hideDialogEventDate()
  {
    this.DialogEventDateShowing = false;
  }
  
  applicarBloqueio()
  {

    let diasParaBloqueio : DiasBloqueado[]=[];

    this.diasBloqueados.forEach( d => 
      {
        diasParaBloqueio.push( {data: d, horainicio:'00:00',horafim:'00:00',options:''} ) 
      })
    
    let bloqueador : Bloqueador = { id: null, motivo: this.motivoBloqueio, dias : diasParaBloqueio }
    
    console.log(bloqueador )

    this.clickBloqueio.next(bloqueador);
    //this.hideDialogEventDate();
  }



}
