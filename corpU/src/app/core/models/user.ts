import { userRole } from "./userRole";

export class user {
    userId?: number;
    email: string;
    password: string;
    userRoleId : number;
    userRole : userRole;

    constructor(user: any) {
        this.userId = user.userId;
        this.email = user.email;
        this.password = user.password;
        this.userRoleId = user.userRoleId;
        this.userRole = user.userRole;
    }
}