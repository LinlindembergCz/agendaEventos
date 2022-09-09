import { Component, Injectable, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.scss']
})

@Injectable()
export class BreadcrumpComponent implements OnInit {

  home: MenuItem = { icon: 'pi pi-home', routerLink: ['/'] };
  breadcrumbs: MenuItem[] = [];

  constructor(private router: Router, private translate: TranslateService) {
    this.translateRoute(this.router.url, this.router.url, this.router.url);
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.breadcrumbs = [];
        this.translateRoute(event.urlAfterRedirects, event.url, event.urlAfterRedirects);
    });
  }

  ngOnInit(): void {
  }

  translateRoute(uri: string, url: string, uriAfterRedirects: string): void {
    let property = "routes";
    uri.toString().split("/").map(x => {
      if(x != "") {
          property += "." + x;
          this.translate.get(property).toPromise().then(trans => {
              if(trans !== undefined && !(trans instanceof Object) && trans !== property) {
                this.breadcrumbs.push({ label: trans, routerLink: uriAfterRedirects.toString() });
              } else if (trans instanceof Object && trans["label"] !== undefined) {
                  this.breadcrumbs.push({ label: trans["label"], routerLink: url.toString() });
              }
          });
      }
  });
  }

}
