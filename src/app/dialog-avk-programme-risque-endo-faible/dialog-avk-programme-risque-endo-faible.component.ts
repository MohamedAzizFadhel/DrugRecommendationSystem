import { Component, OnInit } from '@angular/core';
import { MatDateFormats } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeRisqueEndoElComponent } from '../dialog-avk-programme-risque-endo-el/dialog-avk-programme-risque-endo-el.component';
import { DialogAvkProgrammeRisqueEndoFaibleInrComponent } from '../dialog-avk-programme-risque-endo-faible-inr/dialog-avk-programme-risque-endo-faible-inr.component';
import { DialogAvkProgrammeRisqueEndoComponent } from '../dialog-avk-programme-risque-endo/dialog-avk-programme-risque-endo.component';

@Component({
  selector: 'app-dialog-avk-programme-risque-endo-faible',
  templateUrl: './dialog-avk-programme-risque-endo-faible.component.html',
  styleUrls: ['./dialog-avk-programme-risque-endo-faible.component.css']
})
export class DialogAvkProgrammeRisqueEndoFaibleComponent implements OnInit {

  constructor(public dailog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dailog.open(DialogAvkProgrammeRisqueEndoFaibleInrComponent)
  }
  openDialog2(){
    this.dailog.open(DialogAvkProgrammeRisqueEndoElComponent)
  }
}
