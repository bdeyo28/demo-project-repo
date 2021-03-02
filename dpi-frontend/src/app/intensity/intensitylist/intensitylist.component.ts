import { Component, Input, OnInit } from '@angular/core';
import { Intensity } from 'src/app/Intensity';
import { IntensityService } from 'src/app/intensity.service';

@Component({
  selector: 'app-intensitylist',
  templateUrl: './intensitylist.component.html',
  styleUrls: ['./intensitylist.component.css']
})
export class IntensitylistComponent implements OnInit {

  intensityList : Intensity[];

  constructor(private service : IntensityService) { }

  ngOnInit(): void {

    this.service.getIntensityList().subscribe(list => {
      this.intensityList = list
    });

  }

}
