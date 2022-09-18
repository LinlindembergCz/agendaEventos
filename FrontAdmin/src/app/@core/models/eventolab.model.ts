import { EventolabDias } from "./eventolab-dias.model";

export class  Eventolab 
{
    id: string;
    titulo: string;
    numeroparticipantes: number;
    tipoevento: string;
    linksparainscricao: string;
    descricaoevento:string;
    nomecompleto:string;
    email: string;
    instituicao: string;
    contato:string;
    imagempersonalida:boolean;
    publicaosite:boolean;

    dias: EventolabDias[]=[];
}