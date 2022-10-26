import { Component, OnInit,  AfterContentInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from './@bootstrap/services/loader.service';
import { Router } from '@angular/router';
import { RequestPromiseService } from './@shared/services/request-promise.service';

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
        private loader: LoaderService,
        private router: Router,
        private http: RequestPromiseService,
    ) {
        this.config.ripple = true;
        this.translateService.setDefaultLang(this.lang);        
    }
    ngAfterContentInit() 
    {
        this.loader.hasLoading().subscribe(x => this.hasLoading = x);
    }

    ngOnInit() {
        var user = this.http.GetUser();
        if (user.userName=='')
           this.router.navigate(['login'])
        
        this.translateService.get('primeng').subscribe(res => {
            this.config.setTranslation(res);
        });        
    }

    ngOnDestroy() 
    {

    }
}
