import { Component, OnInit } from '@angular/core';

@Component({
    
    selector: 'app-counter',
    template: `
    <h1> hola mundo desde counter</h1>
    <h1> Hola mundo</h1>
    <p>{{counter}}</p>
    <button (click)="incrementarcounter(+1)">click ++</button>
    <button (click)="incrementarcounter(-1)">click --</button>
    <button (click)="reset()">reset</button>
    
    `
})

export class CounterComponent implements OnInit {
    title = 'sis-fact-indra';
    title2='Pruebita!';
    counter=10;
    incrementarcounter(incremento:number){
     this.counter+=incremento
    }
    reset():void{
     this.counter=10;
     }

    constructor() { }

    ngOnInit() { 


        
    }
}