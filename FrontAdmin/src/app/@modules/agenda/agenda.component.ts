import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { ConfirmationService, MessageService } from 'primeng/api';
import { Bloqueador } from '../../@core/models/bloqueador.model';
import { RequestPromiseService } from '../../@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  _router: Router;

  constructor(
    private http: RequestPromiseService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router,
    
    ){
      this._router = router;
    }

  ngOnInit(): void {    

  }

  bloquear(bloqueador: Bloqueador)
  {   
      this.confirmationService.confirm({
      header: "Bloquear agenda ?",
      message: 'O(s) selecionado(s) ficarão indisponíveis para os usuários agendarem eventos. Essa ação é reversível.<p></p> Tem certeza que deseja <b>bloquear</b> esses dias?',
      
      accept: () => 
          {  
            this.http.post(environment.services.api,"EventoSebraeLab/DiasBloqueados", bloqueador ).then
            ( ()=>{ 
              this.messageService.add({severity:'info', summary:'Confirmação', detail:'Datas Bloqueadas com sucesso!'});
            })
          }
      
      });    
  }

}
