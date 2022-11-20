import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsoleSettings {

  constructor() {
      this.printHeaderConsole();
        
        if(environment.production) {
          // @ts-ignore
          window.console = ConsoleSettings.console;
        }
  }

  private printHeaderConsole() {        
    console.info("%cFramework "+ environment.VersionName, "font-size: 1.3em; color: #44a22d;");
    console.info("%cFramework Version: "+ environment.FrameworkVersion, "font-size: 1.3em; color: #0067CE;");
    console.info("%cFront End Version: "+ environment.FrontVersion, "font-size: 1.3em; color: #0067CE;");

  }

  public static console = (function(oldCons) {
    return {
            log: function(text: any){
                if(!environment.production)
                    oldCons.log(text);
            },
            info: function (text: any) {
                oldCons.info("%c"+ text, "font-size: 1.3em; color: #0067CE;");
            },
            // tslint:disable-next-line: typedef
            warn: function (text: any) {
              if(!environment.production)
                oldCons.warn("%c"+ text, "font-size: 1.3em; color: #ff8000;");
            },
            error: function (text: any) {
              if(!environment.production)
                oldCons.error(text);
              else 
                oldCons.log(text);
            }
        };
    }(window.console));

}
