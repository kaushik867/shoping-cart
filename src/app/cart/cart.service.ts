import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Product, ProductsService } from '../products/products.service';
import { SnackBarService } from '../shared/snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  public cartLength: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(private prodSvc: ProductsService, private snackbarScv: SnackBarService) { }

  public addToCart(product: Product) {
    // First check its should not in cartItems
    const index = this.cartItems.getValue().findIndex(prod => prod.id === product.id);

    if(index === -1) {
      const newCartList = this.cartItems.getValue();
      this.cartItems.next([...newCartList, product]);
      this.cartLength.next(this.cartItems.getValue().length);
      this.snackbarScv.openSnackbar('Item Inserted to the Cart', 'Dismiss');
    } else {
      this.snackbarScv.openSnackbar('This item is already in you Cart', 'Dismiss')
    }
  }

  public removeItemFromCart(prods: Product[], message: string) {
    const remainingItems = this.cartItems.getValue().filter(prod => prods.findIndex(x => prod.id === x.id) === -1);
    this.cartItems.next([...remainingItems]);
    this.cartLength.next(this.cartItems.getValue().length);
    this.snackbarScv.openSnackbar(message, 'Dismiss')
  }

}
