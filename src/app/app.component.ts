import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationsManagerComponent } from './notifications-manager/notifications-manager.component';
import { NotificationsButtonComponent } from './notifications-button/notifications-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    NotificationsManagerComponent,
    NotificationsButtonComponent,
  ],
})
export class AppComponent {
  public changeNotification(num:number) {
      this.notificationsCount = num;
  }
  notificationsCount = 10;
}
