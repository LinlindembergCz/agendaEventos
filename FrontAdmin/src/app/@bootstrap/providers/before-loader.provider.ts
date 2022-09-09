// managehttp.interceptor.ts
import { ApplicationStateService } from '../services/application-state.service';
import { ConsoleSettings } from '../settings/console-settings';


export function BeforeLoaderProvider(applicationStateService: ApplicationStateService) {
  return (): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
        // Carrega os Dados de Console do Sistema
        new ConsoleSettings();

        // Inicia o HostListener
        applicationStateService.startHostListener();


        resolve();
    });
  }
}