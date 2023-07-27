import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedService } from 'src/shared/shared.service';
import * as appData from '../../assets/appData.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public notificationPanel: boolean = false;

  // Get some sample data from json file
  public appData: any = (appData as any).default;

  constructor(private sharedService: SharedService) {

    // Send data to service file

    this.sharedService.onGetMessageData(this.appData);

  }



  // Hide and show notification panel funtion
  onClickNotification() {
    this.notificationPanel = true;
  }






}
