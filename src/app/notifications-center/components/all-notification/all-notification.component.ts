import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';

@Component({
  selector: 'app-all-notification',
  templateUrl: './all-notification.component.html',
  styleUrls: ['./all-notification.component.scss']
})
export class AllNotificationComponent {



  public messageList: any[] = [];
  subscription!: Subscription;
  constructor(private sharedService: SharedService, private router: Router) {

    // Subscribe data from service

    this.subscription = this.sharedService.getMessageList.subscribe((data: any) => {
      this.messageList = data.notification || [];
    })
  }

  ngOnDestroy(): void {
    // clear the subscription
    this.subscription.unsubscribe();
  }

  onViewMessage(item: any) {

    item.unRead = false; /**After view message set to read **/
    this.sharedService.onGetViewMessage(item.message); /** Clicked message send to message view component **/
    this.router.navigate(["panel/view"])
  }
}
