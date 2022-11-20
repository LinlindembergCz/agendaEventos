import { Component, ElementRef, Input, OnInit, OnDestroy, EventEmitter, Output, HostListener } from '@angular/core';
import { ModalService } from './modal.service';
import { Modal } from './modal';


@Component({
    selector: 'ggm-e-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() keyClose: boolean = false;
  @Output() onClose: EventEmitter<any>;
  @Output() onAction: EventEmitter<any>;

  setedModal: boolean = false;

  public modal: Modal = new Modal();
  private element: any;
  private overflow: string = "auto";
  object: any;
  scrollX: number;
  scrollY: number;

  constructor(private modalService: ModalService, private el: ElementRef) {
      this.element = el.nativeElement;
      this.onClose = new EventEmitter<any>();
      this.onAction = new EventEmitter<any>();
      this.setedModal = false;
  }

  ngOnInit(): void {
      let modal = this;

      if (!this.id) {
          console.error('Informe o Id do Elemento da Modal');
          return;
      }
      this.setedModal = this.modal !== null && this.modal !== undefined;
      this.modalService.add(this);
  }

  ngOnDestroy(): void {
      this.modalService.remove(this.id);
      this.element.remove();
  }

  open = (): void => {

      this.disableScroll();
      this.modalHeight();
      
      this.element.querySelector('.modal').style.display = "block"
      this.element.querySelector('.modal-body').style.overflow = "auto"
      this.element.querySelector('.modal-backdrop').classList.add('show');
      this.element.firstElementChild.classList.add('show');
      document.body.style.overflow = "hidden";
      this.element.style.display = 'block';
  }

  close = (): void => {
      this.onClose.emit(null);
      this.enableScroll();
      
      this.element.firstElementChild.classList.remove('show');
      this.element.querySelector('.modal-backdrop').classList.remove('show');
  }

  closeBackdrop() {
    if(this.modal.closeClick) {
      this.close();
    }
  }

  action = (): void =>  {
    this.onAction.emit(null);
     this.enableScroll();
     window.scroll(this.scrollX, this.scrollY);
     this.element.firstElementChild.classList.remove('show');
     this.element.querySelector('.modal-backdrop').classList.remove('show');    
  }

  //#region [ Private Control Methods ]

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(!this.keyClose)
      return;

    if (event.keyCode  === 27) {
      this.enableScroll();
      this.close();
   }
  }

  @HostListener('window:resize', ['$event'])
  sizeChange(event) {
    this.modalHeight();
  }

  enableScroll() {
    this.beforeScrollPosition();
    document.body.style.overflow = this.overflow;
  }

  private disableScroll() {
    this.storeScrollPosition();
    this.overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }

  private modalHeight() {
    if(this.setedModal && this.modal.to.toLowerCase() === 'modal') {
      this.element.querySelector('.modal-body').style.maxHeight = (window.innerHeight - (window.innerHeight * 0.2) - 140) + "px";
    } else {
      this.element.querySelector('.modal-body').style.maxHeight = (window.innerHeight - 60) + "px";
    }
  }

  private storeScrollPosition() {
    this.scrollX = window.pageXOffset === undefined ? document.body.scrollTop : window.pageXOffset;
    this.scrollY = window.pageYOffset  === undefined ? document.body.scrollLeft : window.pageYOffset;
    window.scroll(0, 0);
  }

  private beforeScrollPosition() {
    window.scroll(this.scrollX, this.scrollY);
  }

  //#endregion
}