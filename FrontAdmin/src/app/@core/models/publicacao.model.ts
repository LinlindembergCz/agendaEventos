export class  Publicacao
{
    id: string;
    titulo: string; 
    subtitulo: string;
    legenda: string;
    descricao: string;     
    status: string = 'Rascunho';
    tipopublicacao: string='NOTICIA';
    ativo: boolean = true; 
    personalizadoativado: boolean= false;
    titulochamada: string;
    titulobotao: string;
    linkredirecionamento: string='http://';
}

