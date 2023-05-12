export class qualificationType{
    qualificationTypeId: number;
    description: string;
      status: boolean;
      
      constructor(qulType: any) {
          this.qualificationTypeId = qulType.qualificationTypeId;
          this.description = qulType.description;
          this.status = qulType.status;       
        }
  }