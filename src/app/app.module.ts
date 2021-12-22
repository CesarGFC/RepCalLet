import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import module

// import { LoginPage } from './pages/login/login.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { TabsPageModule } from './tabs/tabs.module';
import { NotificationsPageModule } from './pages/notifications/notifications.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/interservice';

@NgModule({
  declarations: [
    AppComponent,
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
                useClass: IonicRouteStrategy
                 },
                 {
                  provide: HTTP_INTERCEPTORS,
                  useClass: AuthInterceptorService,
                  multi: true
                }
                ],
  bootstrap: [AppComponent]
})
export class AppModule {}
