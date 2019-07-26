import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Rxjs
import { Observable, of } from 'rxjs';
import { map, concatMap, expand, toArray } from "rxjs/operators";
import { EMPTY } from 'rxjs';

// Models
import { Product } from '@products-nubimetrics/models/product.model';
import { ProductResponse } from '@products-nubimetrics/models/product-response.model';

// Contants
import { URLs } from 'src/app/shared/constants/url.constant';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Busca el producto o item ingresado por el usuario, devuelve una
   * lista de productos de una página dada
   * @param text Producto a buscar
   * @param offset Posición del primero elemento
   * @param limit Número de elementos por página
   */
  searchProduct(text: string, offset: number, limit: number): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${URLs.sites}/search?q=${text}&offset=${offset}&limit=${limit}`)
      .pipe(map(response => response));
  }

  /**
   * Devuelve todos los productos de acuerdo al texto ingresado por el usuario
   * @param text Producto a buscar
   */
  getAllProducts(text: string): Observable<Product[]> {
    return this.searchProduct(text, 0, 50).pipe(
      expand((response: ProductResponse) =>
        response.paging.offset < 1000 && response.paging.offset < response.paging.total ?
          this.searchProduct(text, response.paging.offset + 50, 50) :
          EMPTY
      ),
      concatMap((response: ProductResponse) => response.results),
      toArray()
    );

  }

  /**
   * Obtiene la información de un producto dado su id
   * @param idProduct Producto seleccionado
   */
  findOneProductById(idProduct: string): Observable<Product> {
    return this.http.get<Product>(`${URLs.items}/${idProduct}`);
  }

}