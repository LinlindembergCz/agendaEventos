import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
/**
 * menu data service
 */
export class MenuDataService {

    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    private menu: BehaviorSubject<MenuItem[]> = new BehaviorSubject<any>([]);
    public openMenu: boolean = false;

    constructor() {
        this.menu.next(this.getMenuList());
    } 

    getMenuList(): MenuItem[] {
        return [
            {
                label: "Editar Perfil",
                icon: 'pi pi-pw pi-sitemap',
                routerLink: '/profile/edit'            
            },
            {
                label: "Alterar Senha",
                icon: 'pi pi-pw pi-sitemap',
                routerLink: '/sign/password'            
            },
            {
                label: "Sair",
                icon: 'pi pi-pw pi-sitemap',
                routerLink: '/sign/logout'            
            }
        ];
    }

    public asMenu() : Observable<MenuItem[]> {
        return this.menu.asObservable();
    }

    public hideMenu() {
        this.openMenu = false;
    }
}