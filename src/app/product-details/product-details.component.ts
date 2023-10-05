import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const routerParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routerParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
