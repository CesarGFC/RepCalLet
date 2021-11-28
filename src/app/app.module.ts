import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import module
import { HttpClientModule } from '@angular/common/http';

// import { LoginPage } from './pages/login/login.page';
import { TabsPage } from './tabs/tabs.page';
import { HomePage } from './pages/home/home.page';
import { RegistrationPage } from './pages/registration/registration.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { Tab1Page } from './pages/tab1/tab1.page';
import { Tab2Page } from './pages/tab2/tab2.page';
import { Tab3Page } from './pages/tab3/tab3.page';
import { TabsPageModule } from './tabs/tabs.module';

@NgModule({
  declarations: [
    AppComponent,  
    HomePage,
    RegistrationPage,
    ForgotPasswordPage,
    Tab1Page,
    Tab2Page,
    Tab3Page],
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
