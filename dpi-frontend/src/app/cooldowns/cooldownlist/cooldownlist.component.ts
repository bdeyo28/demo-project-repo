import { Component, OnInit } from '@angular/core';
import { Cooldown } from 'src/app/Cooldown';
import { CooldownService } from 'src/app/cooldown.service';

@Component({
  selector: 'app-cooldownlist',
  templateUrl: './cooldownlist.component.html',
  styleUrls: ['./cooldownlist.component.css']
})
export class CooldownlistComponent implements OnInit {


  cooldownList : Cooldown[];

  constructor(private service : CooldownService) { }

  ngOnInit(): void {

    this.service.getAllCooldowns().subscribe(list => {this.cooldownList = list;
      
    });

  }

}
