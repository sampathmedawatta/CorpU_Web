export class applicantAvailability{
    appAvailabilityId: number;
    applicantId: number;
    startDate: Date;
    endDate: Date;
    
    constructor(appAvailability: any) {
        this.appAvailabilityId = appAvailability.appAvailabilityId;
        this.applicantId = appAvailability.applicantId;
        this.startDate = appAvailability.startDate;     
        this.endDate = appAvailability.endDate;       
      }
}