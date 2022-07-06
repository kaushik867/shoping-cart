import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { LoadingService } from 'src/app/shared/loader/loading.service';
import { SnackBarService } from 'src/app/shared/snack-bar.service';
import { Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private productsSvs: ProductsService, private route: ActivatedRoute, 
    private router: Router, private loaderSvc: LoadingService, private cartSvc: CartService,
  ) { }
  public product: Product = <Product>{};
  public catProducts: Product[] = [];
  public loader: boolean = false;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
        const id = params.id;
        if(id) {
            this.productsSvs.getProductById(id).subscribe(data => {
                this.product = {...data};
                this.loadSimilarCategoryProduct(this.product.category, this.product.id);
            }, (error) => {
                this.router.navigate(['server-error']);
            })
        }
    });

    this.loaderSvc.loading.subscribe(data => {
        this.loader = data;
    })
  }

  private loadSimilarCategoryProduct(category: string, id: number) {
    if(category) {
      this.productsSvs.getProductByCategories(category, id).subscribe(data => {
        this.catProducts = [...data]
      },
      (error) => {
        this.router.navigate(['server-error']);
      })
    }
  }

  public back() {
    this.router.navigate(['']);
  }

  public checkOut(product: Product) {
   this.cartSvc.addToCart(product);
   this.router.navigate(['/usercart/cart']);
  }
}
