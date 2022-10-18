import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestPromiseService } from '../../../@shared/services/request-promise.service';

class Banner{
  name: string ;
  summary: string ;
  image: string;
}

@Component({
  selector: 'app-banners-show',
  templateUrl: './banners-show.component.html',
  styleUrls: ['./banners-show.component.scss']
})
export class BannersShowComponent implements OnInit {

  @Input() path: string ="assets/data";
  @Input() fileJson: string ="banners.json";
  @Input() fileName: string="";

  @Input() images: string[]=[];
  


  imgs: Banner[] = [];
  itens: any[]=[];

  constructor(
    private http: RequestPromiseService,
    private route: Router
  ) { }

  ngOnInit(): void {   
    this.getImages();
  }

  getImages() 
  { 
    if (this.fileName==="")
    {
        this.http.get<any>(this.path, this.fileJson).
        then(x => { 
                  x.images.forEach(i => {
                            this.itens.push( {name: x.name, summary:x.summary, image:i });
                        }); 
                        this.imgs = this.itens;      
            });
     }
     else
     {
      this.itens.push( {name: 'banner', summary:'', image:this.fileName });
      this.imgs = this.itens;   
     }
  }

}
