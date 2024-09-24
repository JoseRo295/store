import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../../products/components/product/product.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  counterRef!: number; 

  constructor() {
    //no async
    //before rendering
    //corre una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }
  ngOnChanges(changes: SimpleChanges) {
    //before and during render
    //corre varias veces
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log('Changes: ', changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }
  ngOnInit() {
    //despues de rendericar
    //corre una vez
    //async.then.subs.fetch(para traer una lista de productos)
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    if (typeof window !== 'undefined') {
      this.counterRef = window.setInterval(() => {
        console.log('run interval');
        this.counter.update((statePrev) => statePrev + 1);
      }, 1000);
    }
  }
  ngAfterViewInit() {
    //after render
    //hijos ya fueron pintados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }
  ngOnDestroy() {
    console.log('ngDestroy');
    console.log('-'.repeat(10));
    if (typeof window !== 'undefined' && this.counterRef) {
      window.clearInterval(this.counterRef);
      console.log('Interval cleared');
    }
  }
  doSomething() {
    console.log('change duration');
    //async o no sincrona
  }
}
