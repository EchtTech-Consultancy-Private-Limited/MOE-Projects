import { ApplicationConfig, NgModule } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideAnimations } from "@angular/platform-browser/animations";
import { routes } from "./app.routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";

import {
  DatePipe,
  HashLocationStrategy,
  LocationStrategy,
} from "@angular/common";
import { tokenInterceptor } from "./common/token.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    DatePipe,
    NgModule,
    // provideToastr(), // Toastr providers
  ],
};
export const Config = {
  loaderEnabled: true,
};

// function provideToastr():
//   | import('@angular/core').Provider
//   | import('@angular/core').EnvironmentProviders {
//   throw new Error('Function not implemented.');
// }
