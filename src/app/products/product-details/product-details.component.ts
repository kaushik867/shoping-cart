import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() public product: IProduct =  <IProduct>{};
  constructor() { }

  ngOnInit(): void {
  }

}
