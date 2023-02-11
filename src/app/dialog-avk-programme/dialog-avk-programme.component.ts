import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeRisqueComponent } from '../dialog-avk-programme-risque/dialog-avk-programme-risque.component';

@Component({
  selector: 'app-dialog-avk-programme',
  templateUrl: './dialog-avk-programme.component.html',
  styleUrls: ['./dialog-avk-programme.component.css']
})
export class DialogAvkProgrammeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogAvkProgrammeRisqueComponent);
  } 
}
