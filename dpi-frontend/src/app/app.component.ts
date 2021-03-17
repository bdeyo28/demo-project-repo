import { ChangeDetectorRef, OnDestroy, Component, ViewChild } from '@angular/core';
import {MatMenuModule, MatMenuTrigger, MatMenu} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MediaMatcher } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { ExerciseService } from './exercise.service';
import { WorkoutService } from './workout.service';
import { Exercise } from './Exercise';
import { Workout } from './Workout';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  exerciseList : Exercise[];
  workoutList1 : Workout[];
  workoutList2 : Workout[];
  workoutList3 : Workout[];

  constructor(private exService : ExerciseService,
              private wkService : WorkoutService) {

  }

  ngOnInit() : void {

     this.wkService.getWorkoutList(1).subscribe(list1 => {this.workoutList1 = list1});

     this.wkService.getWorkoutList(2).subscribe(list2 => {this.workoutList2 = list2});

     this.wkService.getWorkoutList(3).subscribe(list3 => {this.workoutList3 = list3});

  }

}
