import { Component, OnInit } from '@angular/core';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { UserUpdateModel } from '../../model/user.model';
@Component({
  selector: 'app-profile-page-show',
  templateUrl: './profile-page-show.component.html',
  styleUrls: ['./profile-page-show.component.scss']
})
export class ProfilePageShowComponent implements OnInit {

  userid: string;

  public userEntity: UserUpdateModel;
  
  constructor(private http: RequestPromiseService, 
              private route: ActivatedRoute, 
              private router: Router,
   ) {
    this.userEntity = new UserUpdateModel()
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.get( params.get('id') );
      this.userid = params.get('id');
    });
  }
  
  get(id: string): void {
    this.http.get<UserUpdateModel>(environment.services.api,`user/profile/${id}`)
      .then(
         data => { 
          this.userEntity =data;   
        });
  }
  

  openProfileEdit() {
    this.router.navigate([]);
  }



  
}
