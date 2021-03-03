import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from 'src/app/Exercise';
import { ExerciseService } from 'src/app/exercise.service';


@Component({
  selector: 'app-exerciselist',
  templateUrl: './exerciselist.component.html',
  styleUrls: ['./exerciselist.component.css']
})
export class ExerciselistComponent implements OnInit {

  exerciseList : Exercise[];
  workoutID : number;

  constructor(private service : ExerciseService, private router : ActivatedRoute) { }

  ngOnInit(): void {

    let idName : string = this.router.snapshot.paramMap.get("workoutID");
    this.workoutID = parseInt(idName);

    this.service.getExerciseList().subscribe(list => {this.exerciseList = list});

  }

}
