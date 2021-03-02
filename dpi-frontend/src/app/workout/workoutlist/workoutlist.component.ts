import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Intensity } from 'src/app/Intensity';
import { Workout } from 'src/app/Workout';
import { WorkoutService } from 'src/app/workout.service';

@Component({
  selector: 'app-workoutlist',
  templateUrl: './workoutlist.component.html',
  styleUrls: ['./workoutlist.component.css']
})
export class WorkoutlistComponent implements OnInit {

  @Input()i : number;
  workoutList : Workout[];
  intensityID : number;

  constructor(private service : WorkoutService, private router : ActivatedRoute) { }

  ngOnInit(): void {

    let idName : string = this.router.snapshot.paramMap.get("intensityID");
    this.intensityID = parseInt(idName);

    this.service.getWorkoutList(this.intensityID).subscribe(list => {this.workoutList = list});

  }

}
