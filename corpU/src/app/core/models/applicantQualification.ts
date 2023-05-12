export class applicantQualification{
    appQualificationId: number;
    applicantId: number;
    qualificationTypeId: number;
    description: string
    awarded_date: Date;
    institute:string;


    constructor(appQualification: any) {
        this.appQualificationId = appQualification.appQualificationId;
        this.applicantId = appQualification.applicantId;
        this.qualificationTypeId = appQualification.qualificationTypeId;
        this.description = appQualification.description;
        this.awarded_date = appQualification.awarded_date;
        this.institute = appQualification.institute;
      }
}
