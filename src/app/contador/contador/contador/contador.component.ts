import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  title :string ='Hola mundo';
  numero:number=10;
  base:number=5;


  constructor() { }

  ngOnInit(): void {
  }

  sumar(){
      this.numero+=1;
  }

  restar(){
    this.numero-=1;
  }


  acumular(base){

        this.numero=this.numero+base;

  }
}
