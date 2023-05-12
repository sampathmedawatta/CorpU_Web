export class application{
    ApplicationId: number;
    applicantId: number;
    vacancyId: number;
    resumeUrl: string;
    status: boolean;
    
    constructor(app: any) {
        this.ApplicationId = app.ApplicationId;
        this.applicantId = app.applicantId;
        this.vacancyId = app.vacancyId;     
        this.resumeUrl = app.resumeUrl;     
        this.status  = app.status;
      }
}