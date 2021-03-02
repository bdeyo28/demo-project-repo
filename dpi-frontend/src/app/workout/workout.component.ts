import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Workout } from '../Workout';
import { Exercise } from '../Exercise';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  @Input()workout : Workout;
  workoutID : number;

  constructor(private workoutService : WorkoutService) { 

  }

  ngOnInit(): void {

    this.workoutService.getWorkout(this.workoutID).subscribe(workout => {this.workout = workout});

  }

}
