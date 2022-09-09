import { concat } from "rxjs";

export class  UserCreateModel 
{
    id: string;
    username:string;
    secret: string;
    document: string;
    mail: string;
    acceptTerms: boolean;
    accepttermsat: string;
    uf: string;
    city: string;
    companyname: string;
    fone:string;
    companySizeId :string;
    sectorId:string;
}

export class  UserForgetedModel 
{
    id: string;
    username:string;
    mail: string;
    lastToken:string;
}

export class  UserUpdateModel 
{
    id: string;
    username:string;
    secret: string;
    document: string;
    mail: string;
    acceptTerms: boolean;
    accepttermsat: string;
    uf: string;
    city: string;
    companyname: string;
    fone:string;
    companySizeId :string;
    sectorId:string;
    
    isValid(): boolean
  {      
       var fieldsValues = ' '+this.username+'?'+
                          ' '+this.secret+'?'+
                          ' '+this.document+'?'+
                          ' '+this.mail+'?'+
                          ' '+this.uf+'?'+
                          ' '+this.city+'?'+             
                          ' '+this.fone+'?'+
                          ' '+this.companySizeId+'?'+
                          ' '+this.sectorId+'?';  

      return fieldsValues.indexOf('undefined?')==-1;       
  }

}