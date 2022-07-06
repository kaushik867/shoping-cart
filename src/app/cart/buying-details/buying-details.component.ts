import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-buying-details',
  templateUrl: './buying-details.component.html',
  styleUrls: ['./buying-details.component.css']
})
export class BuyingDetailsComponent implements OnInit {
  public product: Product = <Product>{};
  constructor(private actRoutes: ActivatedRoute, private prodSvc: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.actRoutes.params.subscribe(data => {
      if (data.id) {
        this.prodSvc.getProductById(data.id).subscribe(data => {
          this.product = {...data};
        }, error => {
          this.router.navigate(['server-error']);
        })
      }
    })
  }

}
