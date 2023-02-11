import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeRisqueEndoFaibleComponent } from '../dialog-avk-programme-risque-endo-faible/dialog-avk-programme-risque-endo-faible.component';

@Component({
  selector: 'app-dialog-avk-programme-risque-endo',
  templateUrl: './dialog-avk-programme-risque-endo.component.html',
  styleUrls: ['./dialog-avk-programme-risque-endo.component.css']
})
export class DialogAvkProgrammeRisqueEndoComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkProgrammeRisqueEndoFaibleComponent);
  }

}
