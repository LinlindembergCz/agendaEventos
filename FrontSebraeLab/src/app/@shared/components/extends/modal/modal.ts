export class Modal {
    title: string; // Titulo a ser exibido na Modal
    to: string = 'modal'; // left, right, down, modal
    labelClose: string = 'Fechar'; // Label do Botão Fechar
    labelAction: string = 'Salvar'; // Label do Botão de Acao
    iconClose: string = 'fa fa-times-circle'; // Label do Botão Fechar
    iconAction: string = 'fa fa-save'; // Label do Botão de Acao

    headerAction: boolean = false; // Mostra ou nao o header
    footerAction: boolean = true; // mostra ou nao o Footer
    noAction: boolean = false;
    closeClick: boolean = true;
}