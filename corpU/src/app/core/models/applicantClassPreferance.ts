export class applicantClassPreferance{
    classPreferanceId: number;
    applicantId: number;
    classTypeId: number;

    constructor(appClassPreferance: any) {
        this.classPreferanceId = appClassPreferance.classPreferanceId;
        this.applicantId = appClassPreferance.applicantId;
        this.classTypeId = appClassPreferance.classTypeId;       
      }
}