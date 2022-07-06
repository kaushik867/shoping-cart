import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() public product: Product =  <Product>{};
  constructor() { }

  ngOnInit(): void {
  }

}
