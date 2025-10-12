import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers:
   [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
    
     
    ]
};
function provideAnimations(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

