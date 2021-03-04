import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from 'src/app/Exercise';
import { ExerciseService } from 'src/app/exercise.service';

@Component({
  selector: 'app-exercisedetails',
  templateUrl: './exercisedetails.component.html',
  styleUrls: ['./exercisedetails.component.css']
})
export class ExercisedetailsComponent implements OnInit {

  @Input()selectExercise : Exercise;
  exerciseID : number;

  constructor(private service : ExerciseService, private router : ActivatedRoute) { }

  ngOnInit(): void {

    let idName : string = this.router.snapshot.paramMap.get("workoutID");
    this.exerciseID = parseInt(idName);

    this.service.getExerciseByID(this.exerciseID).subscribe(id => {this.selectExercise = id});


  }

}
