import { application } from "./application";
import { employee } from "./employee";

export class shortlist{
    shortlistId: number;
    applicationId: number;
    empId: number;
    interviewDate: Date;
    status: string;
    comments: string;
    application : application;
    employee: employee;
}