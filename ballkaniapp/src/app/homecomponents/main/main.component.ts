import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../domain/product';
import { ProductService } from '../../../services/productservice';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

})

export class MainComponent implements OnInit, OnDestroy{
  products: any;
  imageLoaded: boolean = true;

  responsiveOptions: any[] | undefined;

  hasNoImage(product: any): boolean {
    return !product.image || product.image === '#';
  }

  constructor(private productService: ProductService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
      this.productService.getProductsSmall().then((products) => {
          this.products = products;
      });

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info'; // Return a default value for unknown status
    }
  }
  

  visible: boolean = false;

  // showDialog() {
  //   this.visible = true;
  //   this.products = this.products;
  // }

  showDialog(product: any) {
    console.log('Showing product:', product);
    this.visible = true;
    this.products = product; // Set the current product
}


 

}

