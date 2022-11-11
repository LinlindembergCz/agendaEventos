import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { Eventolab } from '../../../../@core/models/eventolab.model';
import { Bloqueador } from '../../../../@core/models/bloqueador.model';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';
import { DiasBloqueado } from '../../../../@core/models/diasBloqueados.model';

import{tiposEventos} from '../../../../@core/enums/tipoevento.type';
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

  tiposEvento:any[]=tiposEventos

  motivoBloqueio: string='motivo do bloqueio';

  bloqueio: Bloqueador= new Bloqueador();

  @Input() public diasBloqueados: Date[]=[new Date()];

  @Output() clickBloqueio = new EventEmitter<Bloqueador>();

  DialogEventDateShowing:boolean = false;

  constructor(
    private http: RequestPromiseService,
    private router: Router   
    ){}   

  ngOnInit(): void {   

    this.bloqueio = new Bloqueador();
  
      this.loadDiasBloqueados().then( ()=>{
        console.log('loadEventos');
           this.loadEventos(); 
           this.loadBloqueio();
      })         
  }

  ShowNovoEvento()
  {
    this.router.navigate(['/novoevento']);
  }



  loadBloqueio():Promise<any> 
  {
    return this.http.get<Bloqueador>(environment.services.api,environment.routes.eventoSebraeLab.bloqueio).
    then(b=>{        
      if (b)
      {
            this.bloqueio = b[0];
            this.motivoBloqueio = this.bloqueio.motivo        
      }       
    });
  }

  loadDiasBloqueados():Promise<any> 
  {
    return this.http.get<any[]>(environment.services.api,environment.routes.eventoSebraeLab.diasBloqueados).
    then(x=>{
      this.diasBloqueados = []
     
      x.forEach(d=> {                     
                       this.diasBloqueados.push(new Date(d.data))                       
                    })
      });
  }


  loadEventos() 
  {
    let eventos :any[]=[];
    const colors =["#9A1663", "#E0144C",  "#FF5858", "#EA047E","#00ABB3"];

    if (this.diasBloqueados)
    {
        this.diasBloqueados.forEach((d: Date)=>{ 
        eventos.push( {title: 'Bloqueado',date: d.toISOString().slice(0, 10),color: "gray"}) });  
    }  

    this.http.get<Eventolab[]>(environment.services.api,environment.routes.eventoSebraeLab.root).then
    ( e=>{        
          e.forEach( d=>{       
                      d.dias.forEach( x=>{
                              let data =  String(x.data).substring(0,10)
                              eventos.push( 
                              {                           
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
    let bloqueador :any;

    if ( this.bloqueio != undefined )
    {
        this.diasBloqueados.forEach( d => 
        {  
          let dia = this.bloqueio.dias.find( b=> new Date(b.data).getDate() == d.getDate() );
  
          if ( dia!=undefined )
              diasParaBloqueio.push( { id: dia?.id , data: d, horainicio:'00:00',horafim:'00:00',options:''} )
          else
             diasParaBloqueio.push( { data: d, horainicio:'00:00',horafim:'00:00',options:''} )
        })
        bloqueador = { id: this.bloqueio.id, motivo: this.motivoBloqueio, dias : diasParaBloqueio }      
        
    }
    else
    {
      this.diasBloqueados.forEach( d => 
      {  
         diasParaBloqueio.push( {  data: d, horainicio:'00:00',horafim:'00:00',options:''} )
      })
      bloqueador = {  motivo: this.motivoBloqueio, dias : diasParaBloqueio }
    } 
    
    this.clickBloqueio.next(bloqueador);
    this.hideDialogEventDate();

    setTimeout( () => {  
                                         
      this.loadEventos()
      
    }, 10000)
    
  }



}
