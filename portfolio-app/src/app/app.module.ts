import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';


@NgModule({
  imports: [
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule.forRoot(),
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
