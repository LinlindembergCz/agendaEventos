import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../0models/usuario';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { Eventolab } from '../0models/eventolab.model';
import { ValidationMessages, GenericValidator, DisplayMessage } from './generic-form-validation';
import { Observable, fromEvent, merge } from 'rxjs';
import { RequestPromiseService  } from '../../@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit, AfterViewInit {
  
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  itens: any[]=[
    {id: 0, titulo: 'Selecione'},

  ];

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';
  MASKS = utilsBr.MASKS;
  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private http: RequestPromiseService)
  {
           
    this.validationMessages = {
      nome: {
        required: 'Por favor, digite seu nome',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido'
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      tipo: {
        required: 'Informe o motivo da visita',
        tipo: 'Tipo inválido'
      },
      telefone: {
        required: 'Informe seu telefone',
        telefone: 'Telefone inválido'
      },
      idevento: {
        required: 'Por favor, escolha um evento.',
        idevento: 'Evento inválido'
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
   }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      tipo: ['', [Validators.required]],
      telefone: ['', [Validators.required]],   
      idevento : ['', [Validators.required]], 
      outromotivo: ['', []],
      aceitelgpd:[false,[Validators.required]],
       
    });

    this.loadEventos();

  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
    });
  }

  adicionarUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {

      this.formResult = JSON.stringify(this.cadastroForm.value);

      let modelUsuario: any = { nome:  this.cadastroForm.value.nome,
                                email: this.cadastroForm.value.email,
                                cpf: this.cadastroForm.value.cpf,
                                tipo: this.cadastroForm.value.tipo,
                                telefone: this.cadastroForm.value.telefone,
                                idevento: this.cadastroForm.value.idevento,
                                dateTime: Date.now,
                                outromotivo: this.cadastroForm.value.outromotivo,
                                aceitelgpd: this.cadastroForm.value.aceitelgpd                            
                              }

      this.http.post<any>(environment.services.api,"TotenControllers", modelUsuario).then( () =>
      {
          this.router.navigate(['sucesso']); 
          this.formResult = "Cadastrado com sucesso!";      
      }).catch( (e) =>{         
          this.formResult = e;
      });
    }
    else {
      this.formResult = "Não submeteu!!!"
    }
  }

  loadEventos() 
  { 
      this.http.get<any[]>(environment.services.api,"TotenControllers").then(x => {this.itens = x});
  }
}