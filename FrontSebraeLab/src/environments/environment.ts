// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  FrontVersion: "0.0.1",
  FrameworkVersion: "5.8.4",
  VersionName: "Black Cat",
  services: {
    zipcode: "",
    api: "http://localhost:1901/api",
    auth: "",
  },
  routes:{
    eventoSebraeLab:{
      root:"EventoSebraeLab",
      publicar:"EventoSebraeLab/Publicar",
      diasBloqueados:"EventoSebraeLab/DiasBloqueados",
      search:  "EventoSebraeLab/Pesquisar?value=",
      alocacao:  "EventoSebraeLab/Disponivel" 
    },
    conteudoSebraeLab:{
      root:"ConteudoSebraeLab",
      publicar:"ConteudoSebraeLab/Publicar",
      ativar: "ConteudoSebraeLab/Ativar",
      desativar:"ConteudoSebraeLab/Desativar",
      search: "ConteudoSebraeLab/Pesquisar?value=",
      pesquisarPorTipo:"ConteudoSebraeLab/PesquisarPorTipo"   
    },
    newsletter:{
      root:"NewsLetter",
    },
    meuevento:{
      agendar:"meuevento/agendar",
      faleconosco: "meuevento/faleconosco"
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
