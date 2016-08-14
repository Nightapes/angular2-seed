import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AboutModule } from './+about/about.module';
import { HomeModule } from './+home/home.module';
import { SharedModule } from './shared/shared.module';
import { SecureModule } from './secure/secure.module';


@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes, { useHash: true }), AboutModule,
  HomeModule, SharedModule.forRoot(), SecureModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
