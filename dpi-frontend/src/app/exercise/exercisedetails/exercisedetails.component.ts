import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment, UrlTree } from '@angular/router';
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

  selectExercise : Exercise;
  exerciseID : number;
  safeURL : SafeResourceUrl;
  videoURL : UrlTree;
  urlPath : string;

  constructor(private service : ExerciseService, 
    private activatedRoute : ActivatedRoute, 
    private sanitizer : DomSanitizer,
    private router : Router) { }

  ngOnInit(): void {

    let idName : string = this.activatedRoute.snapshot.paramMap.get("exerciseID");
    this.exerciseID = parseInt(idName);


    this.service.getExerciseByID(this.exerciseID).subscribe(exercise => {this.selectExercise = exercise; 
        this.urlPath = exercise.exerciseURL;
        this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlPath)});

    // console.log(this.selectExercise);
    // this.urlPath = this.selectExercise.exerciseURL;

    // this.urlPath.replace("watch?=", "embed/");

    // this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/dZgVxmf6jkA");

    // this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlPath);

  }

}
