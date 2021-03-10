import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/Exercise';
import { CommonModule } from '@angular/common';
import { Intensity } from 'src/app/Intensity';
import { IntensityService } from 'src/app/intensity.service';
import { Workout } from 'src/app/Workout';
import { WorkoutService } from 'src/app/workout.service';
import { ExerciseService } from 'src/app/exercise.service';

@Component({
  selector: 'app-editworkout',
  templateUrl: './editworkout.component.html',
  styleUrls: ['./editworkout.component.css']
})
export class EditworkoutComponent implements OnInit {

  nullID: number = 0;

  @Input('ngModel') deleteWorkoutID: number;
  @Input('ngModel') deleteExerciseID: number;
  @Input('ngModel') editExercise: Exercise;
  @Input('ngModel') workoutID: number;
  @Input('ngModel') name: string;
  @Input('ngModel') intensityID: number;
  @Input('ngModel') desc: string;
  @Input('ngModel') intensityName: string;

  completed: boolean;
  exerciseList: Exercise[];
  intensityList: Intensity[];

  intensity1: string;
  intensity2: string;
  intensity3: string;

  workout1: Workout;
  workout2: Workout;
  workout3: Workout;
  newWorkoutID: number;
  selectedWorkout: Workout;

  workoutList1: Workout[];
  workoutList2: Workout[];
  workoutList3: Workout[];

  constructor(private wkService: WorkoutService,
    private exService: ExerciseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private intService: IntensityService) { }

  ngOnInit(): void {

    this.intService.getIntensityList().subscribe(list => {
      this.intensityList = list;
      this.intensity1 = this.intensityList[0].intensityName;
      this.intensity2 = this.intensityList[1].intensityName;
      this.intensity3 = this.intensityList[2].intensityName;
    });

    this.wkService.getWorkoutList(1).subscribe(list => {
      this.workoutList1 = list;
    });
    this.wkService.getWorkoutList(2).subscribe(list => { this.workoutList2 = list });
    this.wkService.getWorkoutList(3).subscribe(list => { this.workoutList3 = list });


    let idName: string = this.activatedRoute.snapshot.paramMap.get("workoutID");
    this.workoutID = parseInt(idName);

    this.wkService.getWorkoutByID(this.workoutID).subscribe(workout => { this.selectedWorkout = workout; });

    this.exService.getAllExercises().subscribe(list => {
      this.exerciseList = list;

      this.exerciseList = this.exerciseList.filter((v, i, a) =>
        a.findIndex(t => (t.exerciseName === v.exerciseName && t.exerciseName === v.exerciseName)) === i)

    });

  }

  addWorkout() {

    if (this.intensityID == null)
    {
      alert("Please choose a valid Intensity Level");
      return;
    }

    let toAdd: Workout = {
      workoutName: this.name, intensityID: this.intensityID,
      workoutDescription: this.desc, isComplete: this.completed,
      exerciseList: this.exerciseList
    };

    this.wkService.addWorkout(toAdd).subscribe((_) => this.router.navigate(["editworkout"]));
    let keepThis = document.getElementById("workoutAdded").innerHTML += `Added : ${toAdd.workoutName}` + "<br>";
    this.name = '';
    this.intensityID = null;
    this.desc = '';
    // this.reloadPageOnClick();

  }

  addExercise() {

    if (this.workoutID === undefined || this.workoutID == this.nullID) {
      alert("Please select a valid workout to add to.");
      return;
    }

    this.router.navigate(["/addExercise/" + this.workoutID]);

  }

  deleteWorkout() {

    if (this.deleteWorkoutID === undefined || this.deleteWorkoutID == this.nullID) {
      alert("Please select a valid workout to delete.");
      return;

    }
    this.deleteExercisesFromWorkout();
    this.wkService.deleteWorkout(this.deleteWorkoutID).subscribe((_) => this.router.navigate(["editworkout"]));
    this.wkService.getWorkoutByID(this.deleteWorkoutID).subscribe(workout => {
      document.getElementById("workoutDeleted").innerHTML += `Removed: ${workout.workoutName}` + "<br>";
    });
  }

  deleteExercisesFromWorkout() {

    this.wkService.deleteExercisesFromWorkout(this.deleteWorkoutID).subscribe((_) => this.router.navigate(["editworkout"]));


  }

  deleteExercise() {

    if (this.deleteExerciseID === null) {
      alert("Please choose a valid exercise selection.")
      return;
    }

    this.exService.deleteExerciseByID(this.deleteExerciseID).subscribe((_) => this.router.navigate(["editworkout"]));
    this.exService.getExerciseByID(this.deleteExerciseID).subscribe(exercise => {
      document.getElementById("exerciseDeleted").innerHTML += `Removed: ${exercise.exerciseName}` + "<br>";
    })
  }

  editExerciseByID() {
    if (this.editExercise == null) {
      alert("Please choose a valid exercise selection.")
      return;
    }

    let id : number = this.editExercise.exerciseID;

    this.exService.editExerciseByID(this.editExercise, id)
                                    .subscribe((_) => this.router.navigate(["/editexercise/" + id]));

  }

  reloadPageOnClick()
  {
    window.location.reload();
  }


}