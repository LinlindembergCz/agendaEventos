import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-espaco-show',
  templateUrl: './espaco-show.component.html',
  styleUrls: ['./espaco-show.component.scss']
})
export class EspacoShowComponent implements OnInit {



  constructor( private router: Router,
  ) { }

  ngOnInit(): void {   
 
  }

  showMeuEvento()
  {
    this.router.navigate(['meuevento']);
  }



}
