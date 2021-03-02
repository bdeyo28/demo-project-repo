import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from '../Exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  exerciseList : Exercise[];
  isCompleted : boolean;

  constructor(private exerciseService : ExerciseService) { }

  ngOnInit(): void {


    this.exerciseService.getExerciseList().subscribe(list => {this.exerciseList = list});

    this.exerciseService.getIsCompleted().subscribe(completed => {this.isCompleted = completed});
  }

}
