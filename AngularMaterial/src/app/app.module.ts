import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoginComponent } from './components/login/login.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ApplicationComponent } from './components/application/application.component';
import {MatRadioModule} from '@angular/material/radio';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { CreateacountComponent } from './components/createacount/createacount.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import { DialogComponent } from './components/application/dialog/dialog.component';
import { PersonalinfoComponent } from './components/application/personalinfo/personalinfo.component';
import { CareerinfoComponent } from './components/application/careerinfo/careerinfo.component';
import {MatCardModule} from '@angular/material/card';
import { FilemanagerComponent } from './components/application/personalinfo/filemanager/filemanager.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { SkillsComponent } from './components/application/careerinfo/skills/skills.component';
import { ExperienceComponent } from './components/application/careerinfo/experience/experience.component';
import { NewExperienceDialogComponent } from './components/application/careerinfo/new-experience-dialog/new-experience-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApplicationComponent,
    AuthorizationComponent,
    CreateacountComponent,
    DialogComponent,
    PersonalinfoComponent,
    CareerinfoComponent,
    FilemanagerComponent,
    SkillsComponent,
    ExperienceComponent,
    NewExperienceDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatStepperModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatRadioModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatChipsModule,
    MatDialogModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
