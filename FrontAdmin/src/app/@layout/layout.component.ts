import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../@bootstrap/services/theme.service';
import { MenuDataService } from './@services/menu-data.service';


@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html'
})
@Injectable({
  providedIn: 'root',
})
export class LayoutComponent implements OnInit {
 
  isMobile: boolean;
  isSmResolution: boolean;
  theme: string;
  isLoginRoute: boolean = false;
  start: boolean = false;

  constructor(
    private themeService: ThemeService,
    private router: Router,
    public menu: MenuDataService
  ) {
  }

  ngOnInit() {
    this.themeService.theme.subscribe((val: string) => {
      this.theme = val;
    });
    this.isLoginRoute = this.router.url.indexOf("/login/") !== -1;
    this.start = true;
  }

  ngOnDestroy() {
    this.themeService.ngOnDestroy();
    this.start = false;
  }


}
