import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastService } from 'src/app/@bootstrap/services/toast.service';
import { ProfilePageEditComponent } from 'src/app/@modules/user/pages/edit/profile-page-edit.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent implements OnInit {

  @Output() onUpload: EventEmitter<any> = new EventEmitter();
  @Input() fileUrl: string;
  @Input() imageName: string;

  text: string = "";
  uploadImageError: boolean = false;
  uploadMediaError: boolean = false;
  uploadImageFinish: boolean = false;
  uploadMediaFinish: boolean = false;

  mediaName: string;
  
  constructor(private toast: ToastService
    ) {

     }

  ngOnInit(): void {
  }

  uploadFile(event: any) {
    this.onUpload.emit(event);    
  } 


  getUrl(image: boolean = true) {
    return environment.services.api + "/Upload/image"; 
  }

  getImageName()
  {
    return this.imageName;
  }

  onBeforeUpload($event: any, image: boolean = true) {
    if($event["currentFiles"] !== undefined) {
      if(image) {
        this.uploadImageError = false;
        this.uploadImageFinish = false;
        this.imageName = $event.currentFiles[0].name ;
      }
      else {
        this.uploadMediaError= false;
        this.uploadMediaFinish = false;
        this.mediaName =  $event.currentFiles[0].name;
      }
    }
  }

  

  uploadErrorImage($event: any) {
    this.uploadImageError = true;
    this.toast.clear();
     this.toast.addSingle("error","Upload!", "Ocorreu um erro no upload da imagem.");
  }

  uploadSuccesImage($event: any) {
    this.uploadImageError = false; 
    this.uploadImageFinish = true;
    this.toast.clear();
    this.fileUrl = $event.originalEvent.body.uri;    
    this.onUpload.emit($event.originalEvent.body.uri);
    this.toast.addSingle("success","Upload!", "Imagem carregada com sucesso.");  

  }
}
