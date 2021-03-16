import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WarmUp } from '../WarmUp';

@Component({
  selector: 'app-warmups',
  templateUrl: './warmups.component.html',
  styleUrls: ['./warmups.component.css']
})
export class WarmupsComponent implements OnInit {

  @Input()warmUp : WarmUp;
  sanitizeURL : SafeResourceUrl;

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit(): void {

    this.sanitizeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.warmUp.warmUpURL);

  }

}
