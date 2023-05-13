import { userRole } from "./userRole";

export class user {
    userId?: number;
    email: string;
    password: string;
    userRoleId : number;
    userRole? : userRole;

    constructor() {

        this.email = '';
        this.password = '';
        this.userRoleId = 1;

    }
}