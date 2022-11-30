import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sebraelab-show',
  templateUrl: './sebraelab-show.component.html',
  styleUrls: ['./sebraelab-show.component.scss']
})
export class SebraelabShowComponent implements OnInit {

  @Input() isMobile: boolean = false;
  
  ngOnInit(): void {   
  }


}
