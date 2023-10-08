import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    public dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    const routerParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routerParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log('Your product has been added to the cart!');
    this.dialogRef.close();
  }
}
