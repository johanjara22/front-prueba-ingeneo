import { Cliente } from "./cliente";
import { Flota } from "./flota";
import { Guia } from "./guia";
import { Puerto } from "./puerto";
import { TipoProducto } from "./tipo-producto";

export class LogisticaTerrestre {
    idLogisticaTerrestre!:number;
    tipoProducto:TipoProducto= new TipoProducto();
    cantidadProducto!:number;
    fechaRegistro!:Date;
    fechaEntrega!:Date;
    flota:Flota = new Flota();
    precioEnvio!:number;
    puerto:Puerto= new Puerto();
    guia:Guia= new Guia();
    cliente:Cliente= new Cliente();
}
