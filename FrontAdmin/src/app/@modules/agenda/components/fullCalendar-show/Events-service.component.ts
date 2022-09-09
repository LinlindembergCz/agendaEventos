import { Injectable } from '@angular/core';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';

@Injectable()
export class EventService {

    constructor(private http: RequestPromiseService) { }

    getEvents() 
    {
        
        return this.http.get<any>("assets/data","eventsLab.json")
        .then(res => <any[]>res.data)
        .then(data => { return data; });
    }
}