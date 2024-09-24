import { Component,signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import {Product} from './../../../shared/models/product.model'
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products= signal<Product[]>([]);

  constructor(){
    const initProducts: Product[]= [
{
  id:Date.now(),
  title: 'Product1',
  price:100,
  image: 'https://picsum.photos/640/640?r=3',
  creationonAt: new Date().toISOString()
},
{
  id:Date.now(),
  title: 'Product2',
  price:100,
  image: 'https://picsum.photos/640/640?r=4',
  creationonAt: new Date().toISOString()
},
{
  id:Date.now(),
  title: 'Product3',
  price:100,
  image: 'https://picsum.photos/640/640?r=5',
  creationonAt: new Date().toISOString()
}
    ];
    this.products.set(initProducts)
  }
fromChild (event:string){
console.log ('estasmos en el padre')
console.log(event)
}
}
