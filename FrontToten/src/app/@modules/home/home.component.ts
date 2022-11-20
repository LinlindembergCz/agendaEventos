import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent{

  constructor(private router: Router) { }

  @HostListener('click', ['$event.target'])
  myMouseClicked() {
    this.router.navigate(['cadastro']);
  }

}
