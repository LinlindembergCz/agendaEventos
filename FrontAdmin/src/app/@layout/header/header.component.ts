import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserContextService } from '../../@bootstrap/services/user-context.service';
import {User  } from '../../@core/models/struct/user.model';
import { ApplicationStateService } from '../../@bootstrap/services/application-state.service';
import { MenuDataService } from '../@services/menu-data.service';
import { MenuItem } from 'primeng/api';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  semfoto ="assets/photos/semfoto.jpg";

  user: User;
  isMobile: boolean = false;

  picture: any = this.semfoto;

  loadImage: boolean = false;

  itemsMenu:  MenuItem[]=  [ 
    {label: '',items: [{label:'Home',command: () => {this.showHome();}}]},


    {label: '________________________',
     items: [{label:'Agenda',command: () => {this.showAgenda();}}]
    },

    {label: '________________________',
     items: [{label:'Conteudos',command: () => {this.showConteudo();}}]
    },

                   
 ];

  constructor(
    private router: Router,
    private userContext: UserContextService,
    public menu: MenuDataService,
    private http: RequestPromiseService,
    private applicationStateService: ApplicationStateService,
  ) {
    this.user = this.userContext.user$.getValue();
 
  }

  ngOnInit() {
   this.applicationStateService.isSmResolution().subscribe(x => {
    this.isMobile =  (this.applicationStateService.device().isMobile() ||
    this.applicationStateService.device().isTablet());
   })
  }

  showHome() {
    this.router.navigate(['index']);
  }

  
  showConteudo() {
    this.router.navigate(['conteudo']);
  }

  showAgenda() {
    this.router.navigate(['agenda']);
  }
    
  logOut() {
    this.http.SetUser(new User(''));
    this.router.navigate(['/user/login']);

  }
  Logout() {
    this.userContext.logout();
    this.router.navigate(['']);
  }

  isLoged()
  {
    return this.userContext.user$.value !=null;
  }

  GetUsername()
  {
    if (this.userContext.user$)
    {
      return this.userContext.user$["_value"].login;
    } else return null;
  }

}
