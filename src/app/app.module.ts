import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import module

// import { LoginPage } from './pages/login/login.page';
import { RegistrationPage } from './pages/registration/registration.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { TabsPageModule } from './tabs/tabs.module';
import { NotificationsPageModule } from './pages/notifications/notifications.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPage,
    ForgotPasswordPage,
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    HttpClientModule, 
    AppRoutingModule,
    FormsModule,
    TabsPageModule],
    providers: [{ provide: RouteReuseStrategy, 
                useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
