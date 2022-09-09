import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';


class Image{
  name: string ;
  summary: string ;
  image: string;
}

@Component({
  selector: 'app-conteudo-show',
  templateUrl: './conteudo-show.component.html',
  styleUrls: ['./conteudo-show.component.scss']
})
export class ConteudoShowComponent implements OnInit {

  imgs: Image[] = [];
  itens: any[]=[];

  constructor(
    private http: RequestPromiseService,
    private route: Router
  ) { }
  
  ngOnInit(): void { 
    this.getInfo();  
  }


  getInfo() 
  { 
      this.http.get<any>("assets/data","imagesContent.json").
      then(x => {      
            x.images.forEach(i => {
                          this.itens.push( {name: x.name, summary:x.summary, image:i });
                      }); 
                      this.imgs = this.itens;  
                      console.log(this.imgs)        
          });
  }


}
