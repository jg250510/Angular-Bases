import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h1>Hola Counter</h1>
    
    <h2>{{counter}}</h2>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decreaseBy()">-1</button>
    <button (click)="reset()">Reset</button>
    
    `
})

export class CounterComponent {
    public counter : number = 10
    constructor() { }

    increaseBy(value : number){
        this.counter += value;
      }
    
      decreaseBy(){
        this.counter -= 1;
      }
    
      reset():void{
        this.counter = 10;
      }


}