import { user } from "./user";

export class applicant{
    applicantId: number;
    name: string;
    email: string
    userId: number;
    user :user;
    resumeUrl:string;
    status: boolean;

    constructor(app: any) {
        this.applicantId = app.applicantId;
        this.email = app.email;
        this.name = app.name;
        this.userId = app.userId;
        this.user = app.user;
        this.resumeUrl = app.resumeUrl;
        this.status = app.status;
      }
}