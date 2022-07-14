import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
      catchError(this.handleError)
    );
  }

  public getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>('https://fakestoreapi.com/products/'+id).pipe(
      catchError(this.handleError)
    )
  }

  public getProductByCategories(category: string, id: number){
    return this.getAllProducts().pipe(
      catchError(this.handleError), map(value => value.filter(prods => prods.category === category && prods.id !== id))
    );
  }

  private handleError(error :HttpErrorResponse) {
    return throwError(error || 'Server Error');
  }
}


export interface IProduct {
  id: number,
  title: string,
  qty: number,
  description: string,
  price: number,
  category: string,
  image: string,
  rating: IRating;
  
}

interface IRating {
  rate: number,
  count: number,
}