import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  nombre:string='IronMan';
  edad:number=45;

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }


  constructor() { }

  ngOnInit(): void {
  }

  obtenerheroe():string{
    return `${this.nombre}-${this.edad}`;
  }

  cambiarnombre():string{
    return this.nombre='spiderman';
  }
  cambiaredad():number{
    return this.edad=35;
  }
}
