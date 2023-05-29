import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { Flota } from 'src/app/models/flota';
import { LogisticaMaritima } from 'src/app/models/logistica-maritima';
import { Puerto } from 'src/app/models/puerto';
import { TipoProducto } from 'src/app/models/tipo-producto';
import { ClienteService } from 'src/app/services/cliente.service';
import { FlotaServiceService } from 'src/app/services/flota-service.service';
import { LogisticaMaritimaService } from 'src/app/services/logistica-maritima.service';
import { PuertoServiceService } from 'src/app/services/puerto-service.service';
import { TipoProductoServiceService } from 'src/app/services/tipo-producto-service.service';

@Component({
  selector: 'app-logistica-maritima',
  templateUrl: './logistica-maritima.component.html',
  styleUrls: ['./logistica-maritima.component.css']
})
export class LogisticaMaritimaComponent implements OnInit {
  logisticaMaritima!: FormGroup;
  logisticaMaritimas:LogisticaMaritima[]=[];
  flotas:Flota[]=[];
  tipoProducto:TipoProducto[]=[];
  puertos:Puerto[]=[];
  clientes:Cliente[]=[];
  precio:any;
  cantidadProducto:any;
  constructor(private logisticaMaritimaService:LogisticaMaritimaService,
    private flotaService:FlotaServiceService,
    private tipoProductoService:TipoProductoServiceService,
    private puertoService:PuertoServiceService,
    private clienteService:ClienteService,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.cargarFormularioPrincipal();
this.cargarFlotas();
this.obtenerLogisticas();
this.cargarClientes();
this.cargarPuertos();
this.cargarTiposProducto();
  }

  obtenerLogisticas(){
    this.logisticaMaritimaService.getAllLogisticasMaritimas().subscribe((logisticas:LogisticaMaritima[])=>{
        this.logisticaMaritimas=logisticas;
    })
  }
  crear(){
  console.log("cantidad"+this.logisticaMaritima.value.cantidadProducto);    
  if (this.logisticaMaritima.value.cantidadProducto>10) {
    this.logisticaMaritima.value.precioEnvio=this.precio-(this.precio*0.03);
    console.log("precio valie"+this.logisticaMaritima.value.precio);
    console.log("precio mod"+this.precio);
    
    
  }
  else{
    this.logisticaMaritima.value.precioEnvio=this.precio;
  }
  this.logisticaMaritima.value.fechaRegistro= new Date();
  this.logisticaMaritima.value.numeroGuia=this.generaGuia();
  console.log("precio final"+this.logisticaMaritima.value.precio);
  this.logisticaMaritimaService.saveLogisticaMaritima(this.logisticaMaritima.value).subscribe(resp=>{
    console.log("resp"+resp);
    this.obtenerLogisticas();
  },err=>{
    console.log("err"+JSON.stringify(err));
    
  })
  }
  cargarFormularioPrincipal() {
    this.logisticaMaritima = this.fb.group({
      tipoProducto: ['', Validators.required],
      cantidadProducto: ['', Validators.required],
      fechaRegistro: ['', Validators.required],
      fechaEntrega: ['', Validators.required],
      puerto: ['', Validators.required],
      precioEnvio: ['', Validators.required],
      flota: ['', Validators.required],
      precio: ['', Validators.required],
      numeroGuia: ['', Validators.required],
      cliente: ['', Validators.required],
    });
  }

  verLogistica(){

  }

  cargarFlotas(){
    this.flotaService.getAllFlotas().subscribe((flotas:Flota[])=>{
      this.flotas=flotas;
    })
  }

  cargarTiposProducto(){
    this.tipoProductoService.getAllTipoProductos().subscribe((tiposProductos:TipoProducto[])=>{
      this.tipoProducto=tiposProductos;
    })
  }

  cargarPuertos(){
    this.puertoService.getAllPuertos().subscribe((puertos:Puerto[])=>{
      this.puertos=puertos;
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
