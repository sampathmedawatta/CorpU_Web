export class unit{
    unitId: number;
    unitName: string;
    unitCode: string;
    status: boolean;
    
    constructor(unit: any) {
        this.unitId = unit.unitId;
        this.unitName = unit.unitName;
        this.unitCode = unit.unitCode;     
        this.status = unit.status;       
      }
}