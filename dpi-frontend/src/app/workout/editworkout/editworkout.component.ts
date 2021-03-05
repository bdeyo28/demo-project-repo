import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/Exercise';
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

  @Input('ngModel')workoutID : number;
  @Input('ngModel')name : string;
  @Input('ngModel')intensityID : number;
  @Input('ngModel')desc : string;
  @Input('ngModel')intensityName : string;
  completed : boolean;
  exerciseList : Exercise[];
  intensityList : Intensity[];
  intensity1 : string;
  intensity2 : string;
  intensity3 : string;

  constructor(private service : WorkoutService, 
              private router : Router,
              private activatedRoute : ActivatedRoute,
              private intService : IntensityService) { }

  ngOnInit(): void {

    this.intService.getIntensityList().subscribe(list => {
      this.intensityList = list;
      this.intensity1 = this.intensityList[0].intensityName;
      this.intensity2 = this.intensityList[1].intensityName;
      this.intensity3 = this.intensityList[2].intensityName;
    });

  }

  addWorkout() {
    let toAdd : Workout = {workoutName : this.name, intensityID : this.intensityID,
                           workoutDescription : this.desc, isComplete : this.completed, 
                           exerciseList : this.exerciseList};
    this.service.addWorkout(toAdd).subscribe((_) => this.router.navigate([""]));
  }

  deleteWorkout() {
      this.service.deleteWorkout(this.workoutID).subscribe((_) => this.router.navigate([""]));
  }

}
