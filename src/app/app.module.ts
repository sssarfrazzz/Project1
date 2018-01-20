import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {MatDividerModule} from '@angular/material/divider';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PracticeAreasComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,
    MatDividerModule,
  ],
  entryComponents: [
    PracticeAreasComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule   {
}
