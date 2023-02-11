import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkNonprogrammeEleveeComponent } from '../dialog-avk-nonprogramme-elevee/dialog-avk-nonprogramme-elevee.component';
import { DialogAvkProgrammeRisqueEleveeComponent } from '../dialog-avk-programme-risque-elevee/dialog-avk-programme-risque-elevee.component';
import { DialogAvkProgrammeRisqueFaibleComponent } from '../dialog-avk-programme-risque-faible/dialog-avk-programme-risque-faible.component';

@Component({
  selector: 'app-dialog-avk-programme-risque',
  templateUrl: './dialog-avk-programme-risque.component.html',
  styleUrls: ['./dialog-avk-programme-risque.component.css']
})
export class DialogAvkProgrammeRisqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogAvkProgrammeRisqueFaibleComponent);
  } 
  openDialog2(){
    this.dialog.open(DialogAvkProgrammeRisqueEleveeComponent)
  }
}
