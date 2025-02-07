import { Component, Input, Output,EventEmitter} from '@angular/core';
import { Product } from '../../../shared/models/product.model';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // @Input({required:true}) img: string = '';
  // @Input({required:true}) price: number = 0;
  // @Input({required:true}) title: string = '';
  @Input({required:true}) product!: Product;

  @Output() addToCart= new EventEmitter()
  
  addToCartHandler() {
    console.log('este fue un click del hijo')
    this.addToCart.emit('Hola este es un mensaje desde el child'+ this.product.title);
  }

}
