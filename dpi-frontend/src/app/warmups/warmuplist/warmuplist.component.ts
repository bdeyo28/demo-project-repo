import { Component, OnInit } from '@angular/core';
import { WarmUp } from 'src/app/WarmUp';
import { WarmupService } from 'src/app/warmup.service';

@Component({
  selector: 'app-warmuplist',
  templateUrl: './warmuplist.component.html',
  styleUrls: ['./warmuplist.component.css']
})
export class WarmuplistComponent implements OnInit {


  warmUpList : WarmUp[];

  constructor(private service : WarmupService) { }

  ngOnInit(): void {

    this.service.getAllWarmUps().subscribe(list => {this.warmUpList = list});


  }

}
