import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { TipoIdentificacion } from 'src/app/models/tipo-identificacion';
import { ClienteService } from 'src/app/services/cliente.service';
import { TipoIdentificacionServiceService } from 'src/app/services/tipo-identificacion-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
cliente!: FormGroup;
tiposIdentificacion:TipoIdentificacion[]=[];
clientes:Cliente[]=[];
  constructor(private clienteService:ClienteService,
    public fb: FormBuilder,
    private tipoIdentificacionService:TipoIdentificacionServiceService) { }

  ngOnInit(): void {
    this.cargarFormularioPrincipal();
    this.cargarClientes();
    this.cargarTiposDeIndentificacion();
  }
  crear(){
  this.clienteService.saveLogisticaTerrestre(this.cliente.value).subscribe(resp=>{
    console.log("cliente creado");
    this.cargarClientes();
    
  },err=>{
    console.log("error al crear cliente"+JSON.stringify(err));
    
  })

  }
  cargarClientes(){
    this.clienteService.getAllClientes().subscribe((clientes:Cliente[])=>{
      this.clientes=clientes;
    })
    }
    cargarFormularioPrincipal() {
      this.cliente = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        email: ['', Validators.required],
        numeroIdentificacion: ['', Validators.required],
        tipoIdentificacion: ['', Validators.required],
       
      });
    }
    cargarTiposDeIndentificacion(){
this.tipoIdentificacionService.getAllTipoIdentificaciones().subscribe((tiposIdentificacion:TipoIdentificacion[])=>{
  this.tiposIdentificacion=tiposIdentificacion;
})
    }
}
