import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { Product, products } from '../products';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // Desestructuración de objetos
  products = [...products];

  constructor(public dialog: MatDialog) {}
  share(nombre: String) {
    window.alert(`El producto ${nombre} se ha compartido`);
  }

  onNotify() {
    window.alert('Se notificará cuando el producto salga a la venta');
  }

  openDialog(product: Product): void {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      data: product,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


