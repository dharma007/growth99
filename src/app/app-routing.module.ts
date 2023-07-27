import { ViewNotificationComponent } from './notifications-center/components/view-notification/view-notification.component';
import { NotificationsCenterComponent } from './notifications-center/notifications-center.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNotificationComponent } from './notifications-center/components/all-notification/all-notification.component';

const routes: Routes = [
  {
    path: 'panel',
    component: NotificationsCenterComponent,
    children: [
      {
        path: 'notifiy',
        component: AllNotificationComponent,
      },
      {
        path: 'view',
        component: ViewNotificationComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
