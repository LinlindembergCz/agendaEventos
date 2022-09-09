import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';
import { Modal } from './modal';

@Injectable({
    providedIn: 'root'
})

export class ModalService {
    private modals: any[] = [];

    add = (modal: ModalComponent) => {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove = (id: string) => {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open = (id: string) => {
        // open modal specified by id
        let modal: ModalComponent = this.modals.filter(x => x.id === id)[0];
        modal.open();
    }

    close = (id: string) => {
        // close modal specified by id
        let modal: ModalComponent = this.modals.filter(x => x.id === id)[0];
        modal.close();
        if(this.modals.filter(x => x.isOpen).length === 0) {
            modal.enableScroll();
        }
    }
    
    modal = (id: string) : Modal => {
        let modal: ModalComponent = this.modals.filter(x => x.id === id)[0];
        return modal.modal;
    }
}
