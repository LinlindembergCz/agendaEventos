import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from './@bootstrap/services/loader.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterContentInit   {

    hasLoading: boolean = false;
    theme: string = "theme-senacrs-dark";
    lang: string = 'pt-br'; 

    constructor(
        private config: PrimeNGConfig,
        private translateService: TranslateService,
        private loader: LoaderService
    ) {
        this.config.ripple = true;
        this.translateService.setDefaultLang(this.lang);        
    }
    ngAfterContentInit() {
        this.loader.hasLoading().subscribe(x => this.hasLoading = x);
    }

    ngOnInit() {
        this.translateService.get('primeng').subscribe(res => {
            this.config.setTranslation(res);
        });
    }

    ngOnDestroy() {
    }
}
