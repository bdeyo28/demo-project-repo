import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutComponent } from './workout/workout.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { IntensityComponent } from './intensity/intensity.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { IntensitylistComponent} from './intensity/intensitylist/intensitylist.component';
import { ExerciselistComponent} from './exercise/exerciselist/exerciselist.component';

const routes: Routes = [{path: "", component : HomepageComponent},
                        {path: "contact", component : ContactpageComponent},
                        {path: "workout", component: WorkoutComponent},
                        {path: "exercise", component: ExerciselistComponent},
                        {path: "intensity", component: IntensitylistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
