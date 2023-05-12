export class applicantContactDetail{
    appContactId: number;
    applicantId: number;
    phone: string;
    address_line1: string
    address_line2: string;
    state:string;
    postcode:string;


    constructor(appContactDetail: any) {
        this.appContactId = appContactDetail.appContactId;
        this.applicantId = appContactDetail.applicantId;
        this.phone = appContactDetail.phone;
        this.address_line1 = appContactDetail.address_line1;
        this.address_line2 = appContactDetail.address_line2;
        this.state = appContactDetail.state;
        this.postcode = appContactDetail.postcode;
        
      }
}
