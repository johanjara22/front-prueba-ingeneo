import { TipoIdentificacion } from "./tipo-identificacion";

export class Cliente {
    numeroIdentificacion!:string;
    tipoIdentificacion:TipoIdentificacion= new TipoIdentificacion();
    nombre!:string;
    apellido!:string;
    email!:string;
}
