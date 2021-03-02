import { Component, Input, OnInit } from '@angular/core';
import { Intensity } from '../Intensity';
import { IntensityService } from '../intensity.service';

@Component({
  selector: 'app-intensity',
  templateUrl: './intensity.component.html',
  styleUrls: ['./intensity.component.css']
})
export class IntensityComponent implements OnInit {


  @Input()intensity : Intensity;

  constructor() { }

  ngOnInit(): void {


  }

}
