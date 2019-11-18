import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitterService } from '../event-emitter.service';
import { IProduct } from '../product';
@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class NgbdModalContent {
  @Input() receivedProduct;

  constructor(public activeModal: NgbActiveModal) { }
}
@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {

  constructor(private modalService: NgbModal, private eventEmitterService: EventEmitterService) { }

  open(product) {
    const modalRef = this.modalService.open(NgbdModalContent, {
      size: "lg",
    });
    modalRef.componentInstance.receivedProduct = product;
  }

  ngOnInit() {
    this.eventEmitterService.subsVar = this.eventEmitterService.
      invokeModalFunction.subscribe((product: IProduct) => {
        this.open(product);
      });
  }

}
