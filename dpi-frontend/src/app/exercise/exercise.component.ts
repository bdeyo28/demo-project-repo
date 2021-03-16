import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from '../Exercise';
import { ExerciseService } from '../exercise.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  @Input()exercise : Exercise;
  sanitizeURL : SafeResourceUrl;

  constructor(private service : ExerciseService, 
              private sanitizer : DomSanitizer,
              private router : ActivatedRoute) { }

  ngOnInit(): void {

    // let idName : string = this.router.snapshot.paramMap.get("workoutID");
    // this.workoutID = parseInt(idName);

    
    this.sanitizeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.exercise.exerciseURL);

  }

}
