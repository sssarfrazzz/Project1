import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatMenuModule, MatIconModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {MatDividerModule} from '@angular/material/divider';
import { FormComponent } from './form/form.component';
 import { ReactiveFormsModule, FormsModule   } from '@angular/forms';
 import { AgmCoreModule } from '@agm/core';
 import { FormControl, Validators, } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PracticeAreasComponent,
    AboutusComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatMenuModule, MatIconModule,
    MatDividerModule, ReactiveFormsModule, FormsModule,
  ],
  entryComponents: [
    PracticeAreasComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule   {
}
