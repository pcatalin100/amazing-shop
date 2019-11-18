import { Component, OnInit } from '@angular/core';
import { ProductService } from '../right-content/product.service';
import { IPromos } from './promos';
import { PromosService } from './promos.service';

@Component({
  selector: 'app-left-content',
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.css']
})
export class LeftContentComponent implements OnInit {
  promos: IPromos[];
  constructor(private promosService: PromosService) { }

  ngOnInit() {
    this.promosService.getPromos().subscribe({
      next: promos => {
        this.promos = promos;
      }
    })
  }

}
