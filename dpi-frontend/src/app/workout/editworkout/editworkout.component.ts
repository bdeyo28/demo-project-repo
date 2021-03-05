import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exercise } from 'src/app/Exercise';
import { Workout } from 'src/app/Workout';
import { WorkoutService } from 'src/app/workout.service';

@Component({
  selector: 'app-editworkout',
  templateUrl: './editworkout.component.html',
  styleUrls: ['./editworkout.component.css']
})
export class EditworkoutComponent implements OnInit {

  name : string;
  intensityID : number;
  desc : string;
  completed : boolean;
  exerciseList : Exercise[];

  constructor(private service : WorkoutService, private router : Router) { }

  ngOnInit(): void {
  }

  addWorkout() {
    let toAdd : Workout = {workoutName : this.name, intensityID : this.intensityID,
                           workoutDescription : this.desc, isComplete : this.completed, exerciseList : this.exerciseList};
    this.service.addWorkout(toAdd).subscribe((_) => this.router.navigate([""]));
  }

}
