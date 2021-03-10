import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/Exercise';
import { ExerciseService } from 'src/app/exercise.service';
import { WorkoutService } from 'src/app/workout.service';

@Component({
  selector: 'app-editexercise',
  templateUrl: './editexercise.component.html',
  styleUrls: ['./editexercise.component.css']
})
export class EditexerciseComponent implements OnInit {

  selectedExercise : Exercise;
  exerciseID : number;

  name: string;
  sets: number;
  reps: string;
  url: string;
  description: string;
  bodyweight: boolean;
  weight: string;
  urlPath: string;
  isComplete: boolean;

  isBodyweight : string;
  isDesc : string;
  isWeighted : string;

  constructor(private wkService: WorkoutService,
    private exService: ExerciseService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router) { }

  ngOnInit(): void {

    let idName: string = this.activatedRoute.snapshot.paramMap.get("exerciseID");
    this.exerciseID = parseInt(idName);


    this.exService.getExerciseByID(this.exerciseID).subscribe(exercise => { this.selectedExercise = exercise; 
      
      if (this.selectedExercise.exerciseWeight == null)
      {
        this.isWeighted = "N/A";
      }
      else
        this.isWeighted = this.selectedExercise.exerciseWeight;

      if (this.selectedExercise.exerciseDesc == null)
      {
        this.isDesc = "N/A";
      }
      else
        this.isDesc = this.selectedExercise.exerciseDesc;

      if (this.selectedExercise.bodyweight == true)
      {
        this.isBodyweight = "Yes";
      }
      else
        this.isBodyweight = "No";
    
    });

  }

  editThisExercise() {

    if (this.name === undefined || this.sets == null || this.reps === undefined
      || this.bodyweight === undefined || this.urlPath === undefined) {
      alert("Please make sure to fill in all required values.");
      return;
    }

    if (this.bodyweight == false && this.weight === undefined)
    {
      alert("Bodyweight cannot be false while weight is undefined.");
      return;
    }

    if (!this.urlPath.includes("www.youtube.com")) {
      alert("Please enter a YouTube link.");
      return;
    }

    let newPath: string = this.urlPath.replace("watch?v=", "embed/");

    let toEdit: Exercise = {
      exerciseName: this.name, exerciseDesc: this.description,
      exerciseSets: this.sets, exerciseReps: this.reps, bodyweight: this.bodyweight,
      exerciseWeight: this.weight, exerciseURL: newPath, isComplete: this.isComplete
    };

    this.exService.editExerciseByID(toEdit, this.exerciseID).subscribe((_) => this.router.navigate(["editworkout"]));

  }

}
