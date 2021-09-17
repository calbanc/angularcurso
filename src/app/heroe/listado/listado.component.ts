import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public heroes :string[]=['spiderman','ironman','hulk','goku'];
  public borrado:string|undefined;
  constructor() { }

  ngOnInit(): void {
  }

  eliminarelemento(){
    //this.heroes.splice(0,1);

    this.borrado=this.heroes.shift();

   // this.heroes.shift();
  }

}
