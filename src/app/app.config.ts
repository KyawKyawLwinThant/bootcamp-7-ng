import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NotificationsService } from './service/notifications.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  NotificationsService]
};
