export class applicantAvailability{
  appAvailabilityId: number;
  applicantId: number;
  availability: {
    monday: {
      allDay: boolean,
      morning: boolean,
      afternoon: boolean,
      evening: boolean
    },
    tuesday: {
      allDay: boolean,
      morning: boolean,
      afternoon: boolean,
      evening: boolean
    },
    wednesday: {
      allDay: boolean,
      morning: boolean,
      afternoon: boolean,
      evening: boolean
    },
    thursday: {
      allDay: boolean,
      morning: boolean,
      afternoon: boolean,
      evening: boolean
    },
    friday: {
      allDay: boolean,
      morning: boolean,
      afternoon: boolean,
      evening: boolean
    }
  };

  constructor() {
    this.appAvailabilityId = 0;
    this.applicantId = 0;
    this.availability = {
      monday: {
        allDay: false,
        morning: false,
        afternoon: false,
        evening: false
      },
      tuesday: {
        allDay: false,
        morning: false,
        afternoon: false,
        evening: false
      },
      wednesday: {
        allDay: false,
        morning: false,
        afternoon: false,
        evening: false
      },
      thursday: {
        allDay: false,
        morning: false,
        afternoon: false,
        evening: false
      },
      friday: {
        allDay: false,
        morning: false,
        afternoon: false,
        evening: false
      }
    };
  }
}
