import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodProgrammeRisqueMajAccuNonComponent } from '../dialog-aod-programme-risque-maj-accu-non/dialog-aod-programme-risque-maj-accu-non.component';
import { DialogAodProgrammeRisqueMajAccuOuiComponent } from '../dialog-aod-programme-risque-maj-accu-oui/dialog-aod-programme-risque-maj-accu-oui.component';

@Component({
  selector: 'app-dialog-aod-programme-risque-maj-accu',
  templateUrl: './dialog-aod-programme-risque-maj-accu.component.html',
  styleUrls: ['./dialog-aod-programme-risque-maj-accu.component.css']
})
export class DialogAodProgrammeRisqueMajAccuComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog1() {
    this.dialog.open(DialogAodProgrammeRisqueMajAccuNonComponent);
  } 
  openDialog2() {
    this.dialog.open(DialogAodProgrammeRisqueMajAccuOuiComponent);
  } 
}
