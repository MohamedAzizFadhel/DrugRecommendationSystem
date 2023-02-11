import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeRisqueEndoFaibleInrOuiComponent } from '../dialog-avk-programme-risque-endo-faible-inr-oui/dialog-avk-programme-risque-endo-faible-inr-oui.component';
import { DialogAvkProgrammeComponent } from '../dialog-avk-programme/dialog-avk-programme.component';

@Component({
  selector: 'app-dialog-avk-programme-risque-endo-faible-inr',
  templateUrl: './dialog-avk-programme-risque-endo-faible-inr.component.html',
  styleUrls: ['./dialog-avk-programme-risque-endo-faible-inr.component.css']
})
export class DialogAvkProgrammeRisqueEndoFaibleInrComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkProgrammeRisqueEndoFaibleInrOuiComponent)
  }

}
