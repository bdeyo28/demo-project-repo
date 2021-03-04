import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/Exercise';
import { ExerciseService } from 'src/app/exercise.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Url } from 'url';

@Component({
  selector: 'app-exercisedetails',
  templateUrl: './exercisedetails.component.html',
  styleUrls: ['./exercisedetails.component.css']
})
export class ExercisedetailsComponent implements OnInit {

  @Input()selectExercise : Exercise;
  exerciseID : number;
  safeURL : SafeResourceUrl;

  constructor(private service : ExerciseService, 
    private activatedRoute : ActivatedRoute, 
    private sanitizer : DomSanitizer,
    private router : Router) { }

  ngOnInit(): void {

    let idName : string = this.activatedRoute.snapshot.paramMap.get("exerciseID");
    this.exerciseID = parseInt(idName);

    // let urlPath : string = this.router.snapshot.paramMap.get("exerciseURL");

    // let videoURL : Url = this.router.parseURL()

    // this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);

    this.service.getExerciseByID(this.exerciseID).subscribe(id => {this.selectExercise = id});


  }

}
