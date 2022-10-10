export const environment = {
  production: false,
  FrontVersion: "0.0.1",
  VersionName: "pilot",
  services: {
    zipcode: "http://",
    api: "http://localhost:1900/api",
    auth: 'https://',
  },
  routes:{
    eventoSebraeLab:{
      root:"EventoSebraeLab",
      publicar:"EventoSebraeLab/Publicar",
      diasBloqueados:"EventoSebraeLab/DiasBloqueados"
    },
    conteudoSebraeLab:{
      root:"ConteudoSebraeLab",
      publicar:"ConteudoSebraeLab/Publicar",
      ativar: "ConteudoSebraeLab/Ativar",
      desativar:"ConteudoSebraeLab/Desativar",
      search: "ConteudoSebraeLab/Pesquisar?search="      
    }
  }
};
