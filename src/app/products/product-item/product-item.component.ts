import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { SnackBarService } from 'src/app/shared/snack-bar.service';
import { Product } from '../products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() product: Product = <Product>{};
  constructor(private router: Router, private cartSvc: CartService,) { }

  ngOnInit(): void {
  }

  public getProductDetails(id: number) {
      if(id) {
          this.router.navigate(['details', id])
      }
  }

  public addToCart(product: Product) {
    const save = this.cartSvc.addToCart(product);
  }
}
