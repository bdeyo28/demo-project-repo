import { Component, Input, OnInit } from '@angular/core';
import { Intensity } from '../Intensity';
import { IntensityService } from '../intensity.service';

@Component({
  selector: 'app-intensity',
  templateUrl: './intensity.component.html',
  styleUrls: ['./intensity.component.css']
})
export class IntensityComponent implements OnInit {


  intensity : Intensity;
  intensityList : Intensity[];

  constructor(private intensityService : IntensityService) { }

  ngOnInit(): void {

    this.intensityService.getIntensity().subscribe(intensity => {this.intensity = intensity});

    this.intensityService.getIntensityList().subscribe(list => {this.intensityList = list});

  }

}
