import { classType } from "./classType";
import { employee } from "./employee";
import { unit } from "./unit";
import { vacancyType } from "./vacancyType";

export class vacancy{
    vacancyId: number;
    vacancyTypeId: number;
    vacancyType: vacancyType;
    classTypeId: number;
    classType:classType;
    empId: number;
    employee : employee;
    unitId: number;
    unit :unit;
    title: string;
    description: string;
    publishDate: string;
    closingDate: string;
    status: boolean;

    constructor(vacancy: any) {
        this.vacancyId = vacancy.vacancyId;
        this.vacancyTypeId = vacancy.vacancyTypeId;
        this.classTypeId = vacancy.classTypeId;     
        this.empId = vacancy.empId;     
        this.unitId  = vacancy.unitId;
        this.title  = vacancy.title;
        this.description  = vacancy.description;
        this.publishDate  = vacancy.publishDate;
        this.closingDate  = vacancy.closingDate;
        this.status  = vacancy.status;
      }
}