import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject = new Subject();
  constructor() { }

  sendMsgUserLogin() {
    this.subject.next(void 0);
  }

  getMsgUserLogin() {
    return this.subject.asObservable();
  }

  sendMsgUserLogout() {
    this.subject.next(void 0);
  }

  getMsgUserLogout() {
    return this.subject.asObservable();
  }
}
