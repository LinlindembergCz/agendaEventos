import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscribable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
/**
 * loader service
 * toggle loader gif in website
 */
export class LoaderService {

    private _loaders: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    private _status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    /**
     *
     */
    constructor() {
            
    }

    start(): void {
        let val = this._loaders.getValue();
        let c = val + 1;
        this._loaders.next(c);
        this._status.next(true);
    }

    end(): void {
        let val = this._loaders.getValue();
        let c = val - 1;
        if(c <= 1) {
            this._loaders.next(0);
            this._status.next(false);
        } else {
            this._loaders.next(c);
        }
    }

    forceEnd(): void {
        this._loaders.next(0);
        this._status.next(false);
    }

    hasLoading(): Observable<boolean> {
        return this._status.asObservable();
    }
}