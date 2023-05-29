import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bodega } from 'src/app/models/bodega';
import { Cliente } from 'src/app/models/cliente';
import { LogisticaTerrestre } from 'src/app/models/logistica-terrestre';
import { TipoProducto } from 'src/app/models/tipo-producto';
import { Vehiculo } from 'src/app/models/vehiculo';
import { BodegaServiceService } from 'src/app/services/bodega-service.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { LogisticaTerrestreService } from 'src/app/services/logistica-terrestre.service';
import { TipoProductoServiceService } from 'src/app/services/tipo-producto-service.service';
import { VehiculoServiceService } from 'src/app/services/vehiculo-service.service';
@Component({
  selector: 'app-logistica-terrestre',
  templateUrl: './logistica-terrestre.component.html',
  styleUrls: ['./logistica-terrestre.component.css']
})
export class LogisticaTerrestreComponent implements OnInit {
  logisticaTerrestre!: FormGroup;
  logisticaTerrestres:LogisticaTerrestre[]=[];
  bodegas:Bodega[]=[];
  tipoProducto:TipoProducto[]=[];
  vehiculos:Vehiculo[]=[];
  clientes:Cliente[]=[];
  precio:any;
  cantidadProducto:any;
  constructor(private logisticaTerrestreService:LogisticaTerrestreService,
    private bodegaService:BodegaServiceService,
    private tipoProductoService:TipoProductoServiceService,
    private vehiculoService:VehiculoServiceService,
    private clienteService:ClienteService,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.cargarFormularioPrincipal();
this.cargarBodegas();
this.obtenerLogisticas();
this.cargarClientes();
this.cargarVehiculos();
this.cargarTiposProducto();
  }

  obtenerLogisticas(){
    this.logisticaTerrestreService.getAllLogisticasTerrestres().subscribe((logisticas:LogisticaTerrestre[])=>{
        this.logisticaTerrestres=logisticas;
    })
  }
  crear(){
  console.log("cantidad"+this.logisticaTerrestre.value.cantidadProducto);    
  if (this.logisticaTerrestre.value.cantidadProducto>10) {
    this.logisticaTerrestre.value.precioEnvio=this.precio-(this.precio*0.05);
    console.log("precio valie"+this.logisticaTerrestre.value.precio);
    console.log("precio mod"+this.precio);
    
    
  }
  else{
    this.logisticaTerrestre.value.precioEnvio=this.precio;
  }
  this.logisticaTerrestre.value.fechaRegistro= new Date();
  this.logisticaTerrestre.value.numeroGuia=this.generaGuia();
  console.log("precio final"+this.logisticaTerrestre.value.precio);
  console.log("Bodega"+this.logisticaTerrestre.value.bodega.idBodega);
  this.logisticaTerrestreService.saveLogisticaTerrestre(this.logisticaTerrestre.value).subscribe(resp=>{
    console.log("resp"+resp);
    this.obtenerLogisticas();
  },err=>{
    console.log("err"+JSON.stringify(err));
    
  })
  }
  cargarFormularioPrincipal() {
    this.logisticaTerrestre = this.fb.group({
      tipoProducto: ['', Validators.required],
      cantidadProducto: ['', Validators.required],
      fechaRegistro: ['', Validators.required],
      fechaEntrega: ['', Validators.required],
      bodega: ['', Validators.required],
      precioEnvio: ['', Validators.required],
      vehiculo: ['', Validators.required],
      precio: ['', Validators.required],
      numeroGuia: ['', Validators.required],
      cliente: ['', Validators.required],
    });
  }

  verLogistica(){

  }

  cargarBodegas(){
    this.bodegaService.getAllBodegas().subscribe((bodegas:Bodega[])=>{
      this.bodegas=bodegas;
    })
  }

  cargarTiposProducto(){
    this.tipoProductoService.getAllTipoProductos().subscribe((tiposProductos:TipoProducto[])=>{
      this.tipoProducto=tiposProductos;
    })
  }

  cargarVehiculos(){
    this.vehiculoService.getAllTipoVehiculos().subscribe((vehiculos:Vehiculo[])=>{
      this.vehiculos=vehiculos;
    })
  }

  cargarClientes(){
    this.clienteService.getAllClientes().subscribe((clientes:Cliente[])=>{
      this.clientes=clientes;
    })
  }

   generaGuia() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 11; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}



}
