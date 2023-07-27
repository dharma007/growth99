import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/shared/shared.service';

@Component({
  selector: 'app-notifications-center',
  templateUrl: './notifications-center.component.html',
  styleUrls: ['./notifications-center.component.scss']
})
export class NotificationsCenterComponent {

  constructor(private router: Router) {

  }

  ngOnInit() {
    // Initial navigate to all notifictions panel
    this.router.navigate(["panel/notifiy"]);
  }
}
