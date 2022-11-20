import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApplicationStateService } from './application-state.service';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {

    public theme: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public lockMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isMobile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isTablet: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isSmResolution: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    constructor(
        private applicationStateService: ApplicationStateService) { }


    setTheme(value: string): void {
        this.theme.next(value);
    }

    toggleLockMenu(): void {
        this.lockMenu.next(!this.lockMenu.value);
    }

    resolutionActions(): void {
        this.applicationStateService.isSmResolution().subscribe(x => {
            this.isTablet.next(this.applicationStateService.device().isTablet());
            this.isMobile.next(this.applicationStateService.device().isMobile());
            this.isSmResolution.next(x);
        });
    }

    ngOnDestroy() {
        this.isMobile.observers.forEach(x => x.complete());
        this.isTablet.observers.forEach(x => x.complete());
        this.isSmResolution.observers.forEach(x => x.complete());
        this.theme.observers.forEach(x => x.complete());
        this.lockMenu.observers.forEach(x => x.complete());
      }
}
