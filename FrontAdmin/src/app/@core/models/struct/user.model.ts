export class User {
    
    authenticationId: string;
    userId: string;
    personId: string;
    userName: string;
    name: string;
    token: string;
    thumbnailPhoto: string;
    expirationAt: Date;
    isExpired: boolean;

    constructor(
        userName: string
        /*authenticationId: string,
        userId: string,
        personId: string,
        *
        name: string,
        token: string,
        expirationAt: Date,
        isExpired: boolean,*/

    ) {
        this.userName = userName;
        /*this.authenticationId = authenticationId;
        this.userId = userId;
        this.personId = personId;
        
        this.name = name;
        this.token = token;
        this.expirationAt = expirationAt;
        this.isExpired = isExpired;*/
    }

}