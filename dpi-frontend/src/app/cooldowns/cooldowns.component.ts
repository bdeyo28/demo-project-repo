import { Component, Input, OnInit } from '@angular/core';
import { Cooldown } from '../Cooldown';
import { CooldownService } from '../cooldown.service';

@Component({
  selector: 'app-cooldowns',
  templateUrl: './cooldowns.component.html',
  styleUrls: ['./cooldowns.component.css']
})
export class CooldownsComponent implements OnInit {

  @Input()cooldown : Cooldown;

  constructor(private service : CooldownService) { }

  ngOnInit(): void {
  }

}
