import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeRisqueEndoFaibleInrNonComponent } from '../dialog-avk-programme-risque-endo-faible-inr-non/dialog-avk-programme-risque-endo-faible-inr-non.component';
import { DialogAvkProgrammeRisqueEndoFaibleInrOuiResComponent } from '../dialog-avk-programme-risque-endo-faible-inr-oui-res/dialog-avk-programme-risque-endo-faible-inr-oui-res.component';
import { DialogAvkProgrammeRisqueEndoFaibleInrComponent } from '../dialog-avk-programme-risque-endo-faible-inr/dialog-avk-programme-risque-endo-faible-inr.component';

@Component({
  selector: 'app-dialog-avk-programme-risque-endo-faible-inr-oui',
  templateUrl: './dialog-avk-programme-risque-endo-faible-inr-oui.component.html',
  styleUrls: ['./dialog-avk-programme-risque-endo-faible-inr-oui.component.css']
})
export class DialogAvkProgrammeRisqueEndoFaibleInrOuiComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkProgrammeRisqueEndoFaibleInrOuiResComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAvkProgrammeRisqueEndoFaibleInrNonComponent)
  }

}
