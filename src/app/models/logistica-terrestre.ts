import { Bodega } from "./bodega";
import { Cliente } from "./cliente";
import { Flota } from "./flota";
import { Guia } from "./guia";
import { Puerto } from "./puerto";
import { TipoProducto } from "./tipo-producto";
import { Vehiculo } from "./vehiculo";

export class LogisticaTerrestre {
    idLogisticaTerrestre!:number;
    tipoProducto:TipoProducto= new TipoProducto();
    cantidadProducto!:number;
    fechaRegistro!:Date;
    fechaEntrega!:Date;
    vehiculo:Vehiculo= new Vehiculo();
    bodega:Bodega= new Bodega();
    precioEnvio!:number;
    numeroGuia:Guia= new Guia();
    cliente:Cliente= new Cliente();
}
