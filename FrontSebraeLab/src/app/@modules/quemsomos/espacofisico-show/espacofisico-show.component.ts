import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espacofisico-show',
  templateUrl: './espacofisico-show.component.html',
  styleUrls: ['./espacofisico-show.component.scss']
})
export class EspacoFisicoShowComponent implements OnInit {

  images: any[] =[];

  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor() { }

  ngOnInit(): void {   
    this.images =  [
                      {
                          "previewImageSrc": "../../../../assets/imgs/fisico1.png",
                          "thumbnailImageSrc": "../../../../assets/imgs/fisico1.png",
                          "alt": "img1",
                          "title": "Title 1"
                      },
                      {
                          "previewImageSrc": "../../../../assets/imgs/fisico2.png",
                          "thumbnailImageSrc": "../../../../assets/imgs/fisico2.png",
                          "alt": "img2",
                          "title": "Title 2"
                      },
                      {
                          "previewImageSrc": "../../../../assets/imgs/fisico3.png",
                          "thumbnailImageSrc": "../../../../assets/imgs/fisico3.png",
                          "alt": "img2",
                          "title": "Title 2"
                      },                     
                      {
                          "previewImageSrc": "../../../../assets/imgs/fisico4.png",
                          "thumbnailImageSrc": "../../../../assets/imgs/fisico4.png",
                          "alt": "img2",
                          "title": "Title 2"
                      },
                      {
                          "previewImageSrc": "../../../../assets/imgs/fisico5.png",
                          "thumbnailImageSrc": "../../../../assets/imgs/fisico5.png",
                          "alt": "img2",
                          "title": "Title 2"
                      },
                  ];
  }




}
