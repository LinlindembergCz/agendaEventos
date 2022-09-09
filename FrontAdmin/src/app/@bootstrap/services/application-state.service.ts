import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BehaviorSubject, fromEvent, Observable, Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
/**
 * application state service
 */
export class ApplicationStateService implements OnDestroy {

  private smResolution: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private currentWindow: BehaviorSubject<Window>;
  private keyup: BehaviorSubject<KeyboardEvent>;

  constructor(private deviceService: DeviceDetectorService) {
    this.currentWindow = new BehaviorSubject<Window>(window);
  }

  startHostListener(): void {
    //console.log("Start Host Listener Observer");
    fromEvent(window, 'resize').subscribe(($event: any) => {
      this.onResize($event);
    });
    fromEvent(window, 'load').subscribe(() => {
      this.onLoad();
    });
    fromEvent(window, 'keyup').subscribe(($event: KeyboardEvent) => {
      this.onKeyup($event);
    });
  }


  private onResize(event): void {
    this.currentWindow.next(window);
    this.smResolution.next(!this.deviceService.isDesktop || event.target.innerWidth <= 992);
  }

  private onLoad(): void {
    this.currentWindow.next(window);
    this.smResolution.next(!this.deviceService.isDesktop || window.innerWidth <= 992);
  }

  private onKeyup(event: KeyboardEvent): void {
    if (this.keyup === undefined) {
      this.keyup = new BehaviorSubject<KeyboardEvent>(event);
    } else {
      this.keyup.next(event);
    }
  }

  device(): DeviceDetectorService {
    return this.deviceService;
  }

  resizeAction(): Observable<Window> {
    return this.currentWindow.asObservable();
  }

  KeyupAction(): Observable<KeyboardEvent> {
    return this.keyup.asObservable();
  }

  isSmResolution(): Observable<boolean> {
    return this.smResolution.asObservable();
  }

  ngOnDestroy(): void {
    this.currentWindow.complete();
    this.smResolution.complete();
    this.keyup.complete();
    //console.log("Stop Host Listener Observer");
  }
}
