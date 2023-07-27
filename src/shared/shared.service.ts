import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    public messageList = new BehaviorSubject([]);
    getMessageList = this.messageList.asObservable();

    public viewMessage = new BehaviorSubject('');
    getViewMessage = this.viewMessage.asObservable();

    constructor(
        private http: HttpClient,

    ) { }


    onGetMessageData(data: any) {
        this.messageList.next(data);
    }

    onGetViewMessage(data: any) {
        this.viewMessage.next(data);

    }
}
