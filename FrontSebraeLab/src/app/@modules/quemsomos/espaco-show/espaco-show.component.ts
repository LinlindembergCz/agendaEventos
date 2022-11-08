import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-espaco-show',
  templateUrl: './espaco-show.component.html',
  styleUrls: ['./espaco-show.component.scss']
})
export class EspacoShowComponent implements OnInit {

  @Input() isMobile: boolean = false;

  constructor( private router: Router,
  ) { }

  ngOnInit(): void {   
 
  }

  showMeuEvento()
  {
    this.router.navigate(['meuevento']);
  }



}
