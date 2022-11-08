import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
