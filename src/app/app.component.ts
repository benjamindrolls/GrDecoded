import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppinstructionsComponent } from './appinstructions/appinstructions.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(public dialog: MatDialog){}

  ngOnInit() {
    this.dialog.open(AppinstructionsComponent, {
      panelClass: 'openingInstructions'
    })
  } 

  dropdown() {
    let menu = document.getElementById("dropdown-menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
}
  


