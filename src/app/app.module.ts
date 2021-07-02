import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DevUIModule } from 'ng-devui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionTabsComponent } from './selection-tabs/selection-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
