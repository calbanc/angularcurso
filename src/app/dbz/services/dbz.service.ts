import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {

  constructor(){
    console.log('Servicio inicializado');
  }

  get personajes():Personaje[]{
    return [...this._personajes];
  }
  private _personajes:Personaje[]=[
    {
        nombre:'Goku',
        poder:14000
    },
    {
        nombre:'Vegeta',
        poder:10000
    }
  ];


  agregarpersonaje(personaje:Personaje){
     this._personajes.push(personaje);
  }



}
