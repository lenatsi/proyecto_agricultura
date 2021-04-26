import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeConsejosComponent } from './home-consejos/home-consejos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [		
    AppComponent,
      TopMenuComponent,
      HomePageComponent,
      HomeConsejosComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
