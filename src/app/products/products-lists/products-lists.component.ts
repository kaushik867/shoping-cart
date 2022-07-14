import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/loader/loading.service';
import { IProduct, ProductsService } from '../products.service';

@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.css']
})
export class ProductsListsComponent implements OnInit {
  public products: IProduct[] = [];
  public loader: boolean = false;
  constructor(private productsSvc: ProductsService, private router: Router, private loaderSvc: LoadingService) { }

  ngOnInit(): void {
    this.loaderSvc.loading.subscribe(val => {
      this.loader = val;
    })
    this.initProducts();
  }

  private initProducts() {
    this.productsSvc.getAllProducts().subscribe(prods => {
      this.products = [...prods];
    }, (err) => {
        this.router.navigate(['server-error']);
    });
  }
}
