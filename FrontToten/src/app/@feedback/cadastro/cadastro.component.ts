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



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit, AfterViewInit {
  
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  itens: any[]=[
    {id: 1, titulo: 'Gabriel'},
    {id: 2, titulo: 'Pedro'},
    {id: 3, titulo: 'Julia'}
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
      nascimento: {
        required: 'Informe o mês de nascimento',
        nascimento: 'Mês de nascimento inválido'
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
      nascimento: ['', [Validators.required]],   
      idevento : ['', [Validators.required]],  
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
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);

      this.http.post<Usuario>("http://localhost:5251/api","TotenControllers", this.usuario).then( () =>
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
      this.http.get<any[]>("http://localhost:5251/api","TotenControllers").then(x => {this.itens = x});
  }
}