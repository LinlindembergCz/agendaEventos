import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ggm-t-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() id: string;
  @Input() label: string;
  @Input() src: string;
  @Input() icon: string;
  @Input() breakline: boolean = false;
  @Input() size: number;

  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if(this.size === 0 || this.size === undefined ) {
      this.size = 36;
    }
  }

  click(): void {
    if (this.toggle !== undefined) {
      this.toggle.emit(true);
    }
  }
}
