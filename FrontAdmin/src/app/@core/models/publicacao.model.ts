export class  Publicacao
{
    id: string;
    titulo: string; 
    subtitulo: string;
    legenda: string;
    descricao: string;
    personalizadodesativado: boolean= false; 
    status: string = 'Rascunho';
    tipopublicacao: string='NOTICIA';
    ativo: boolean = true; 
    titulochamada: string;
    titulobotao: string;
    linkredirecionamento: string;
}

