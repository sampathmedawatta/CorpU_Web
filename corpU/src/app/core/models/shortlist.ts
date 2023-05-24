import { application } from "./application";
import { employee } from "./employee";

export class shortlist{
    shortlistId: number;
    applicationId: number;
    empId: number;
    location: string;
    timeslot: string;
    interviewDate: string;
    interviewTime: string
    status: string;
    comments: string;
    application : application;
    employee: employee;
}