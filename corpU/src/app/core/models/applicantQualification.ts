import { qualificationType } from "./qualificationType";

export class applicantQualification{
    appQualificationId: number;
    applicantId: number;
    qualificationTypeId: number;
    description: string
    awardedYear: number;
    institute:string;
    qualificationType: qualificationType;

      
}
