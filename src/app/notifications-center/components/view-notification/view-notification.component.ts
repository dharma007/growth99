import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';

@Component({
  selector: 'app-view-notification',
  templateUrl: './view-notification.component.html',
  styleUrls: ['./view-notification.component.scss']
})
export class ViewNotificationComponent {


  public message: any;
  subscription!: Subscription;

  constructor(private sharedService: SharedService, private router: Router) {

    // Subscribe data from service
    this.subscription = this.sharedService.getViewMessage.subscribe((data: any) => {
      console.log(data)
      this.message = data || '';
    })
  }

  onback() {
    this.router.navigate(["panel/notifiy"]);
  }

  ngOnDestroy(): void {
    // clear the subscription
    this.subscription.unsubscribe();
  }
}
