import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeRisqueFaibleRes1Component } from '../dialog-avk-programme-risque-faible-res1/dialog-avk-programme-risque-faible-res1.component';
import { DialogAvkProgrammeRisqueFaibleRes2Component } from '../dialog-avk-programme-risque-faible-res2/dialog-avk-programme-risque-faible-res2.component';

@Component({
  selector: 'app-dialog-avk-programme-risque-faible',
  templateUrl: './dialog-avk-programme-risque-faible.component.html',
  styleUrls: ['./dialog-avk-programme-risque-faible.component.css']
})
export class DialogAvkProgrammeRisqueFaibleComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogAvkProgrammeRisqueFaibleRes1Component);
  } 
  openDialog1() {
    this.dialog.open(DialogAvkProgrammeRisqueFaibleRes2Component);
  } 
}
