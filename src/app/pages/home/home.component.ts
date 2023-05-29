import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opcionVentana!: number;
  constructor() { }

  ngOnInit(): void {
    this.opcionVentana=1;
  }

  welcome() {
    this.opcionVentana = 4;
  }
  
  clientes() {
    this.opcionVentana = 1;
  }
  logisticaMaritima() {
    this.opcionVentana = 2;
  }
  logisticaTerrestre() {
    this.opcionVentana = 3;
  }
}
