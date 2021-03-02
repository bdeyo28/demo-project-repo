import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutComponent } from './workout/workout.component';
import { IntensityComponent } from './intensity/intensity.component';
import { ExerciseComponent } from './exercise/exercise.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ContactService } from './contact.service';
import { IntensitylistComponent } from './intensity/intensitylist/intensitylist.component';
import { ExerciselistComponent } from './exercise/exerciselist/exerciselist.component';
import { WorkoutlistComponent } from './workout/workoutlist/workoutlist.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    IntensityComponent,
    ExerciseComponent,
    HomepageComponent,
    ContactpageComponent,
    IntensitylistComponent,
    ExerciselistComponent,
    WorkoutlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }