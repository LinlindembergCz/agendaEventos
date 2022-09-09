import { Component, OnInit } from '@angular/core';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { UserUpdateModel } from '../../model/user.model';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  
  constructor(private route: ActivatedRoute, 
              private router: Router,
   ) {
    
   }

  ngOnInit(): void {
      }
    
}
