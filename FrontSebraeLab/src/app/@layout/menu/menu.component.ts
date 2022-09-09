import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../@bootstrap/services/session.service';
import { ApplicationStateService } from '../../@bootstrap/services/application-state.service';
import { MenuDataService } from '../@services/menu-data.service';
import { MenuItem } from 'primeng/api';
import { UserContextService } from 'src/app/@bootstrap/services/user-context.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit {

    enableLock: boolean = false;
    items: MenuItem[];
    showMenu: boolean = false;
    
    constructor(
        private menuDataService: MenuDataService,
        private context: UserContextService,
        private router: Router,
        private applicationStateService: ApplicationStateService) {
    }

    ngOnInit() {
        this.items = this.menuDataService.getMenuList();
        
    }

    ngOnDestroy() {
    }

}
