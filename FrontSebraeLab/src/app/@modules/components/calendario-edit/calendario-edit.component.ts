import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventBooking } from '../reserve-submit/model/EventBooking-model';


interface Period {
  index: number;
  name:string;
  data: string; 
  horaInicio: string;
  horaFim: string;
  option:string;
}

@Component({
  selector: 'app-calendario-edit',
  templateUrl: './calendario-edit.component.html',
  styleUrls: ['./calendario-edit.component.scss']
})
export class CalendarioEditComponent implements AfterViewInit, OnInit {
        
  @Input() public eventBooking : EventBooking = new EventBooking()  
  
  periodos: Period[]=[];
  
  @Input() ShowButtobAplly:boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {   
    console.log( 'ngOnInit' )
  }

  ngAfterViewInit()
  {    console.log( 'ngAfterViewInit' )
       this.route.queryParams.subscribe(
          params =>{  if (params['datas'])
                      {
                        let datasArray:Array<string> = JSON.parse(params['datas']);
                        let OptionsArray:Array<string> = JSON.parse(params['options']);
                        let HoraInicioArray:Array<string> = JSON.parse(params['horasinicio']);
                        let HoraFimArray:Array<string> = JSON.parse(params['horasfim']);
                        let i :number = 0;
                        datasArray.forEach(data =>{ 
                                                    const date = new Date(data)
                                                    this.eventBooking.Days.push(date);
                                                    this.eventBooking.Options.push(OptionsArray[i]);
                                                    this.eventBooking.HoursStart.push(HoraInicioArray[i]);
                                                    this.eventBooking.HoursEnd.push(HoraFimArray[i]);                                                
                                                    this.selectDate(date);

                                                    i++;
                                                  })
                   
                      }
                    })
  }

  
  selectDate(e)
  {    
    this.periodos=[]
    
    if (this.eventBooking.Days!=null)
    {
      //console.log(this.eventBooking.Days);
      let i = 0;
      this.eventBooking.Days.forEach( 
      d =>{  
              this.periodos.push(
                {index: i, 
                 name:'periodo'+i, 
                 data:d.toLocaleDateString(), 
                 horaInicio:this.eventBooking.HoursStart[i], 
                 horaFim:this.eventBooking.HoursEnd[i],
                 option: this.eventBooking.Options[i]}
                )
              i=i+1;
          });
    }
    //console.log(this.periodos)
  }

  isDaySelected(e)
  {
    return this.eventBooking.Days.find(d => d.getDay() == e.day);    
  }



}
