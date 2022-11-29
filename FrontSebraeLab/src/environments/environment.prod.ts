export const environment = {
  production: true,
  FrontVersion: "0.0.1",
  FrameworkVersion: "5.8.4",
  VersionName: "Black Cat",
  services: {
    zipcode: "http://",
    api: "http://localhost:91/api",
    auth: 'http://',
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
              root:"meuevento"
            }
         }
}

