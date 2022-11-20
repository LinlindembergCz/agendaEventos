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
        authenticationId: string,
        userId: string,
        personId: string,
        userName: string,
        name: string,
        token: string,
        expirationAt: Date,
        isExpired: boolean,

    ) {
        this.authenticationId = authenticationId;
        this.userId = userId;
        this.personId = personId;
        this.userName = userName;
        this.name = name;
        this.token = token;
        this.expirationAt = expirationAt;
        this.isExpired = isExpired;
    }

}