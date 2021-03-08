import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/Exercise';
import { CommonModule } from '@angular/common';
import { Intensity } from 'src/app/Intensity';
import { IntensityService } from 'src/app/intensity.service';
import { Workout } from 'src/app/Workout';
import { WorkoutService } from 'src/app/workout.service';

@Component({
  selector: 'app-editworkout',
  templateUrl: './editworkout.component.html',
  styleUrls: ['./editworkout.component.css']
})
export class EditworkoutComponent implements OnInit {

  nullID : number = 0;
  
  @Input('ngModel') deleteWorkoutID: number;
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
  newWorkoutID : number;
  selectedWorkout : Workout;

  workoutList1: Workout[];
  workoutList2: Workout[];
  workoutList3: Workout[];

  constructor(private wkService: WorkoutService,
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

  }

  addWorkout() {
    let toAdd: Workout = {
      workoutName: this.name, intensityID: this.intensityID,
      workoutDescription: this.desc, isComplete: this.completed,
      exerciseList: this.exerciseList
    };

    

    this.wkService.addWorkout(toAdd).subscribe((_) => this.router.navigate(["editworkout"]));
  }

  deleteWorkout() {

    if (this.deleteWorkoutID === undefined || this.deleteWorkoutID == this.nullID)
    {
        alert("Please select a valid workout to delete.");
        return;

    }
    this.wkService.deleteWorkout(this.deleteWorkoutID).subscribe((_) => this.router.navigate(["editworkout"]));
    document.getElementById("deleteWorkout").innerHTML = "<br><br>" + "The requested workout has been deleted.";
    document.getElementById("reset").style.display = "inline";
  }
}
