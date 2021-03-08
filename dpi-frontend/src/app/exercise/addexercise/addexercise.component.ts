import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseService } from 'src/app/exercise.service';
import { Workout } from 'src/app/Workout';
import { WorkoutService } from 'src/app/workout.service';

@Component({
  selector: 'app-addexercise',
  templateUrl: './addexercise.component.html',
  styleUrls: ['./addexercise.component.css']
})
export class AddexerciseComponent implements OnInit {

  selectedWorkout : Workout;
  workoutID : number;

  constructor(private service : WorkoutService, 
              private activatedRoute : ActivatedRoute, 
              private sanitizer : DomSanitizer,
              private router : Router) { }

  ngOnInit(): void {

    let idName : string = this.activatedRoute.snapshot.paramMap.get("workoutID");
    this.workoutID = parseInt(idName);


    this.service.getWorkoutByID(this.workoutID).subscribe(workout => {this.selectedWorkout = workout;});
  }

}
