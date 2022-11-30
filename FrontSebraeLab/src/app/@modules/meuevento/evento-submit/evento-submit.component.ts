import {AfterViewInit, Component,Input,OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventolab } from '../../../@core/models/eventolab.model';
import { environment } from '../../../../environments/environment';
import { RequestPromiseService } from '../../../@shared/services/request-promise.service';
import { EventolabDias } from 'src/app/@core/models/eventolab-dias.model';


interface TipoEvento {
    code: string,
    name: string   
}

@Component({
    selector: 'app-evento-submit',
    templateUrl: './evento-submit.component.html',
    styleUrls: ['./evento-submit.component.scss']
  })
export class EventoSubmit implements AfterViewInit, OnInit  {

    @Input() isMobile:boolean = false;

    showDialogErro: boolean = false;
    messageDialogErro: string ='';
    showDialogSucesso: boolean = false;
    messageDialogSucesso: string ='';
    showDialogAtencao: boolean = false;
    messageDialogAtencao: string ='';


    loadAllTabs:boolean = false;
    activeIndex:number=0;

    mensagemEnvio:string='Enviar';
    mensagemErro: string;
    diasEvento: string = '';

    events: any[];
    tiposEnvento:TipoEvento[];
    optionDate: string;
    tipoEvento: any;
    nomeEvento: string='';
    numeroParticipantes: number;
    descricao: string;
    linkinscricao: string;
    nomecompleto:string;
    email:string;
    instituicao: string;
    contato: string;

    @Input() periodos: any[]=[];
 

    constructor(
        private http: RequestPromiseService,
        private route: ActivatedRoute,
        private router: Router
      ) { }
    
    ngOnInit() {
        this.tiposEnvento = [
            {name: 'Palestra', code: '1'},
            {name: 'Workshop', code: '2'},
            {name: 'Curso', code: '3'},
            {name: 'Evento Fechado', code: '4'},
            {name: 'Outros', code: '5'},
        ]
    }

    ngAfterViewInit()
    {
       this.loadAllTabs = false

       this.route.queryParams.subscribe(
        params =>{  
                    if (params['nomeevento'])
                    {
                        this.nomeEvento =params['nomeevento'];
                    }

                    if (params['numeroparticipantes'])
                    {
                        this.numeroParticipantes =params['numeroparticipantes'];
                    }
                 })
    }

    showSuccess(msg: string ) 
    {
        this.showDialogSucesso = false
        this.messageDialogSucesso = msg;
        this.showDialogSucesso = true;
    }
    
    showError(msg: string ) 
    {
        this.showDialogErro = false
        this.messageDialogErro = msg;
        this.showDialogErro = true;
    }
    
    showWarn(msg: string ) 
    {
        this.showDialogAtencao = false
        this.messageDialogAtencao = msg;
        this.showDialogAtencao = true;
    }
    
    onTabOpen(e:any)
    {
        this.activeIndex= e.index;
    }

    nextTab(index:number)
    {
       this.activeIndex= index;
       this.verifyAvailability(this.periodos);
    }

    priorTab(index:number)
    {
       this.activeIndex = index-1;
    }

    async verifyAvailability( periodos: any[]):Promise<void>
    {
       this.showDialogAtencao= false;
       this.diasEvento = '';
       
        for await (const p of periodos)
       {
            let url = environment.routes.eventoSebraeLab.alocacao+
                    `?Data=${p.data}&horainicio=${p.horaInicio}&horafinal=${p.horaFim}`;

            this.http.get( environment.services.api, url).then( 
            (disponivel:boolean) =>
            {
                if (!disponivel)                      
                {
                    this.mensagemErro=`Já existe um outro evento alocado entre este período!`                      
                    this.showWarn(this.mensagemErro);
                } else {
                    this.mensagemErro = '';
                }
            })            
       }      
    }
    
    montarCorpoMensagem()
    {
        return `<html><body><b>Tipo de evento:</b> ${this.tipoEvento.name}<br>
                <b>Titulo do Evento:</b> ${this.nomeEvento}<br>
                <b>Vagas: </b>${this.numeroParticipantes} <br>
                <b>Link inscrição:</b> ${this.linkinscricao} <br>
                <b>Nome :</b> ${this.nomecompleto} <br>
                <b>Email:</b> ${this.email} <br>
                <b>Instituição:</b> ${this.instituicao} <br>
                <b>Descrição:</b> ${this.descricao} <br><br>
                <b>Período:</b> <br>
                ${this.diasEvento}
                </body></html>`;
    }

    send()
    {
        this.mensagemEnvio = 'Enviando...';

        this.verifyAvailability(this.periodos).finally( ()=>
        {
            if ( this.mensagemErro=='' )
            {
                this.periodos.forEach( p=> { this.diasEvento = this.diasEvento +` ${p.data} de ${p.horaInicio} a ${p.horaFim} <br>`; })
 
                let _body = this.montarCorpoMensagem();

                this.http.post<Eventolab>(environment.services.api,environment.routes.meuevento.agendar, 
                { subject: "Reservar: "+this.nomeEvento,body: _body,name: this.nomecompleto,from: this.email,to:''}).
                then(
                    (r:any)=>
                    {   console.log(r)
                        if (r)
                        {                          
                            this.showSuccess( "Avaliaremos e enviaremos a confirmação ao seu e-mail informado.");
                            this.router.navigate(['']);
                        }    
                        else 
                        {
                            this.showWarn("Algo deu errado, tente novamente mais tarde!");
                        }
                    }
                ).catch(
                (e)=>{ 
                        console.log(e)
                        this.showError( "Algo deu errado, tente novamente mais tarde!" );
                     }
                ).finally( () => this.mensagemEnvio = 'Enviar');
             }
             else this.mensagemEnvio = 'Enviar';
        })

       /* let eventoModel = {
            titulo : this.nomeEvento,
            subtitulo: this.nomeEvento,
            numeroparticipantes: this.numeroParticipantes,
            tipoevento: this.tipoEvento.name,
            linksparainscricao:this.linkinscricao,
            descricaoevento:this.descricao,
            nomecompleto:this.nomecompleto,
            email:this.email,
            instituicao:this.instituicao,
            contato:this.contato,
            imagempersonalida: false,
            publicaosite : false,   
            dias: [],                              
            status: 'Rascunho'
        }        
            
        this.periodos.forEach( d =>{
            eventoModel.dias.push( {
                data: new Date(d.data),
                horainicio: d.horaInicio,
                horafim: d.horaFim,
                option: JSON.stringify(d.option),
                status: ""
                } );
        });           
                                
        console.log( eventoModel );

        this.http.post<Eventolab>(environment.services.api,environment.routes.eventoSebraeLab.root, eventoModel ).
        then( () =>{}).catch( (e) =>{ });
        */            
    }

}