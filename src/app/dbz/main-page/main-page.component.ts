import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    public nuevo:Personaje={
        nombre:'Maestro Roschi',
        poder:1230
    }


/*
    get personajes():Personaje[]{
      return this.DbzService.personajes;
    }

    agregarNuevoPersonaje(arg:Personaje){
       this.personajes.push(arg)
    }

 */
    constructor() {}

    ngOnInit(): void {
    }




}
