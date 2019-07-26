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

  /**
   * Devuelve los productos que complen con la condición
   * @param condition Condición 'new', 'used'
   * @param products Productos a filtrar
   */
  getAllProductsByCondition(condition: string, products: Product[]): Observable<Product[]> {
    return of(products).pipe(map(products => {
      let productsByCondition: Product[] = [];
      products.forEach(x => {
        if (x.condition == condition) {
          productsByCondition.push(x);
        }
      });
      return productsByCondition;
    }));
  }

  /**
   * Ordena los productos ascendente o descendente de acuerdo a la selección
   * del usuario
   * @param order tipo de ordenacion
   * @param products Productos a ordenar
   */
  orderProductsByPrice(order: string, products: Product[]): Observable<Product[]> {
    return of(products).pipe(map(products => {
      return products.sort((a: Product, b: Product) => {
        let comparison = 0;
        if (order == 'desc') {
          if (a.price >= b.price) {
            comparison = 1;
          } else {
            comparison = -1;
          }
        } else {
          if (a.price < b.price) {
            comparison = 1;
          } else {
            comparison = -1;
          }
        }
        return comparison;
      })
    }));
  }

  /**
   * Ordena todos los productos por la cantidad de ventas
   * @param order Tipo de ordenacion
   * @param products Productos a ordenar
   */
  orderProductsBySoldQuantity(order: string, products: Product[]): Observable<Product[]> {
    return of(products).pipe(map(products => {
      return products.sort((a: Product, b: Product) => {
        let comparison = 0;
        if (order == 'ascendente') {
          if (a.sold_quantity >= b.sold_quantity) {
            comparison = 1;
          } else {
            comparison = -1;
          }
        } else {
          if (a.price < b.price) {
            comparison = 1;
          } else {
            comparison = -1;
          }
        }
        return comparison;
      })
    }));
  }

  /**
   * Filtra los productos entre precio ingresado por el usuario
   * @param min precio minimo
   * @param max precio maximo
   * @param products productos
   */
  filterProductsBetweenPrices(min: number, max: number, products: Product[]): Observable<Product[]> {
    return of(products).pipe(map(products => {
      let productsBetweenPrices: Product[] = [];
      products.forEach(x => {
        if (x.price >= min && x.price <= max) {
          productsBetweenPrices.push(x);
        }
      });
      return productsBetweenPrices;
    }));
  }

}