import { employeeRole } from "./employeeRole";
import { faculty } from "./faculty";
import { user } from "./user";

export class employee {
 
    empId: number;
    email: string;
    empName: string;
    phone: string;
    userId: number;
    user :user;
    empRoleId: number;
    employeeRole: employeeRole;
    facultyId: number;
    faculty: faculty;

    status: boolean;
  
    constructor(emp: any) {
      this.empId = emp.empId;
      this.email = emp.email;
      this.empName = emp.empName;
      this.phone = emp.phone;
      this.userId = emp.userId;
      this.user = emp.user;
      this.empRoleId = emp.empRoleId;
      this.employeeRole = emp.employeeRole;
      this.facultyId = emp.facultyId;
      this.faculty = emp.faculty;
      this.status = emp.status;
    }
}