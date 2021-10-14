import { APP_INITIALIZER, NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { PromptComponent } from './components/prompt/prompt.component';
import { PwaService } from './services/pwa.service';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { ClipboardModule } from 'ngx-clipboard';

const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    FooterComponent,
    PromptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    GooglePayButtonModule,
    ClipboardModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production, registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: initializer, deps: [PwaService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
 }
