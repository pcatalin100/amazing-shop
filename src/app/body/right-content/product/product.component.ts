import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../product';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
  }
  openModal(product: IProduct){
    this.eventEmitterService.openModal(this.product);
  }

}
