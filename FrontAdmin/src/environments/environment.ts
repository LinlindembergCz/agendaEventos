export const environment = {
  production: false,
  FrontVersion: "0.0.1",
  FrameworkVersion: "5.8.4",
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
