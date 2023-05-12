export class classType{
  classTypeId: number;
  classDescription: string;
    status: boolean;
    
    constructor(classType: any) {
        this.classTypeId = classType.classTypeId;
        this.classDescription = classType.classDescription;
        this.status = classType.status;       
      }
}