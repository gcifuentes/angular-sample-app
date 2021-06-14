import { IndiceService } from './services/indice.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';




import { FlexLayoutModule } from '@angular/flex-layout'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndiceComponent } from './components/indice/indice.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MenuComponent } from './components/shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiceComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    IndiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
