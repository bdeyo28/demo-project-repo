import { Component, ViewChild } from '@angular/core';
import {MatMenuModule, MatMenuTrigger, MatMenu} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  title = 'dpi-frontend';
}
