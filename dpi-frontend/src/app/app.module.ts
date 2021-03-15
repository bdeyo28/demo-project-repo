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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './homepage/carousel/carousel.component';
import { ExercisedetailsComponent } from './exercise/exercisedetails/exercisedetails.component';
import { EditworkoutComponent } from './workout/editworkout/editworkout.component';
import { AddexerciseComponent } from './exercise/addexercise/addexercise.component';
import { EditexerciseComponent } from './exercise/editexercise/editexercise.component';
import { MatIconModule } from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button';
import { WarmupsComponent } from './warmups/warmups.component';
import { CooldownsComponent } from './cooldowns/cooldowns.component';

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
    WorkoutlistComponent,
    CarouselComponent,
    ExercisedetailsComponent,
    EditworkoutComponent,
    AddexerciseComponent,
    EditexerciseComponent,
    WarmupsComponent,
    CooldownsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
