import { Component, Input, OnInit } from '@angular/core';
import { Cooldown } from '../Cooldown';
import { CooldownService } from '../cooldown.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cooldowns',
  templateUrl: './cooldowns.component.html',
  styleUrls: ['./cooldowns.component.css']
})
export class CooldownsComponent implements OnInit {

  @Input()cooldown : Cooldown;
  sanitizeURL : SafeResourceUrl;

  constructor(private service : CooldownService, private sanitizer : DomSanitizer) { }

  ngOnInit(): void {

    this.sanitizeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.cooldown.cooldownURL);


  }

}
