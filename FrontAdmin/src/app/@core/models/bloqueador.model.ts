import { DiasBloqueado } from "./diasBloqueados.model";

export class  Bloqueador
{
    id: string;
    motivo: string; 
    dias: DiasBloqueado[]=[];
    
}