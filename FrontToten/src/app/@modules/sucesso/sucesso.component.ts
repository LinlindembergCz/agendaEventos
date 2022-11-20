import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucesso',
  templateUrl: './sucesso.component.html',
  styles: []
})
export class SucessoComponent implements OnInit {
  
  constructor(private router: Router) { 
  }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['home']);
  }, 10000);
  }
}
