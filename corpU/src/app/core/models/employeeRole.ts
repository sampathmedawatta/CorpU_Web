export class employeeRole {
 
    empRoleId: number;
    roleName: string;
    status: boolean;
    
  
    constructor(empRole: any) {
      this.empRoleId = empRole.empRoleId;
      this.roleName = empRole.roleName;
      this.status = empRole.status;
    }
}