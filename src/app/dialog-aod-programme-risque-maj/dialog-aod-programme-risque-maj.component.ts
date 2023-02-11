import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodProgrammeRisqueMajAccuComponent } from '../dialog-aod-programme-risque-maj-accu/dialog-aod-programme-risque-maj-accu.component';

@Component({
  selector: 'app-dialog-aod-programme-risque-maj',
  templateUrl: './dialog-aod-programme-risque-maj.component.html',
  styleUrls: ['./dialog-aod-programme-risque-maj.component.css']
})
export class DialogAodProgrammeRisqueMajComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog1() {
    this.dialog.open(DialogAodProgrammeRisqueMajAccuComponent);
  } 

}
