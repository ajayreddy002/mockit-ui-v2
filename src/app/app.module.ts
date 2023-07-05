import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './helpers/http.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './transactions/success/success.component';
import { SharedModule } from './shared/shared.module';
import { TitleStrategy } from '@angular/router';
import { TemplatePageTitleStrategy } from './helpers/title-service';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, SuccessComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    ApiService,
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
