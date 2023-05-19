import { applicant } from "./applicant";
import { vacancy } from "./vacancy";

export class application{
    applicationId: number;
    applicantId: number;
    vacancyId: number;
    resumeUrl: string;
    status: boolean;
    applicant : applicant;
    vacancy: vacancy;
}