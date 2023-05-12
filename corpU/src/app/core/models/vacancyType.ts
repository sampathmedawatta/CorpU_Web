export class vacancyType{
    vacancyTypeId: number;
    vacancyName: string;
    status: boolean;
    
    constructor(vacType: any) {
        this.vacancyTypeId = vacType.vacancyTypeId;
        this.vacancyName = vacType.vacancyName;
        this.status = vacType.status;       
      }
}