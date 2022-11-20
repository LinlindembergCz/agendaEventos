import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { WarmupExportsModule } from './scripts/warmup.exports';

@NgModule({
    exports: [
        WarmupExportsModule
    ]
})

export class BootstrapModule {

}