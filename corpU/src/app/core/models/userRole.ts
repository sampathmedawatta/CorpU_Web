export class userRole {
 
    userRoleId: number;
    roleName: string;
    status: boolean;
    
  
    constructor(userRole: any) {
      this.userRoleId = userRole.userRoleId;
      this.roleName = userRole.roleName;
      this.status = userRole.status;
    }
}