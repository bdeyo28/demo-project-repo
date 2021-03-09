import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/Exercise';
import { ExerciseService } from 'src/app/exercise.service';
import { Workout } from 'src/app/Workout';
import { WorkoutService } from 'src/app/workout.service';

@Component({
  selector: 'app-addexercise',
  templateUrl: './addexercise.component.html',
  styleUrls: ['./addexercise.component.css']
})
export class AddexerciseComponent implements OnInit {

  nullID : number = 0;

  selectedWorkout: Workout;
  workoutID: number;
  name: string;
  sets: number;
  reps: string;
  url: string;
  description: string;
  bodyweight: boolean;
  weight: string;
  urlPath: string;
  isComplete: boolean;

  selectExercise: Exercise;
  exerciseList : Exercise[];

  thisDiv: any = document.getElementById("exerciseAdded");

  constructor(private wkService: WorkoutService,
    private exService: ExerciseService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router) { }

  ngOnInit(): void {

    let idName: string = this.activatedRoute.snapshot.paramMap.get("workoutID");
    this.workoutID = parseInt(idName);


    this.wkService.getWorkoutByID(this.workoutID).subscribe(workout => { this.selectedWorkout = workout; });

    this.exService.getAllExercises().subscribe(list => {this.exerciseList = list});

  }

  addExistingExercise() {
    if (this.selectExercise === null)
    {
      alert("Please choose a valid exercise selection.")
      return;
    }
    
    this.exService.addExerciseToWorkout(this.selectExercise, this.workoutID).subscribe((_) => 
                this.router.navigate(["addExercise/" + this.workoutID]));

  }


  addExercise() {

    // https://www.youtube.com/watch?v=r8NaWdh8jyE

    if (this.name === undefined || this.sets === undefined || this.reps === undefined
      || this.bodyweight === undefined || this.urlPath === undefined) {
      alert("Please make sure to fill in all required values.");
      return;
    }

    if (!this.urlPath.includes("www.youtube.com")) {
      alert("Please enter a YouTube link.");
      return;
    }

    let newPath: string = this.urlPath.replace("watch?v=", "embed/");

    let toAdd: Exercise = {
      exerciseName: this.name, workoutID: this.workoutID, exerciseDesc: this.description,
      exerciseSets: this.sets, exerciseReps: this.reps, bodyweight: this.bodyweight,
      exerciseWeight: this.weight, exerciseURL: newPath, isComplete: this.isComplete
    };

    this.exService.addExercise(toAdd).subscribe((_) => this.router.navigate(["addExercise/" + this.workoutID]));

    // this.thisDiv.append('<br><li>' + this.name + '</li>');


  }

}
