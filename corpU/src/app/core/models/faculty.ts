export class faculty {
 
    facultyId: number;
    facultyName: string;
    status: boolean;
    
  
    constructor(factory: any) {
      this.facultyId = factory.facultyId;
      this.facultyName = factory.facultyName;
      this.status = factory.status;
    }
}