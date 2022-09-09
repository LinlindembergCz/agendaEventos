import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastService } from 'src/app/@bootstrap/services/toast.service';

@Component({
  selector: 'app-photo-input-preview',
  templateUrl: './photo-input-preview.component.html',
  styleUrls: ['./photo-input-preview.component.scss']
})
export class PhotoInputPreviewComponent implements OnInit {

  @Input() imagePath: string;

  constructor(private toast: ToastService) { }

  ngOnInit(): void {
  }

}
