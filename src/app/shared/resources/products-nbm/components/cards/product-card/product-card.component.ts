import { Component, OnInit, Input } from '@angular/core';

// Bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Services
import { ProductsService } from '@products-nubimetrics/services/products.service';

// Components
import { ProductModalComponent } from '@products-nbm-nubimetrics/components/modals/product-modal/product-modal.component';

// Models
import { Product } from '@products-nubimetrics/models/product.model';

@Component({
  selector: 'nubimetrics-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product = new Product({});

  constructor(
    private modalService: NgbModal,
    private productService: ProductsService
  ) { }

  ngOnInit() {
  }

  openInfoProduct() {
    this.productService.findOneProductById(this.product.id).subscribe(product => {
      const modalRef = this.modalService.open(ProductModalComponent, { centered: true });
      modalRef.componentInstance.product = product;
    });
  }
}
