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

   
}