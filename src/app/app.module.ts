import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import module
import { HttpClientModule } from '@angular/common/http';

// import { LoginPage } from './pages/login/login.page';
import { RegistrationPage } from './pages/registration/registration.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { TabsPageModule } from './tabs/tabs.module';
import { NotificationsPageModule } from './pages/notifications/notifications.module';

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
    AppRoutingModule,
    TabsPageModule],
    providers: [{ provide: RouteReuseStrategy, 
                useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
