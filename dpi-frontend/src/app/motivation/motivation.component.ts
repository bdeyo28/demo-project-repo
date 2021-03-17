import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.css']
})
export class MotivationComponent implements OnInit {

  imgSrc : SafeResourceUrl;

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit(): void {

    this.imgSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Z63w5PefxTQ");

  }

}
