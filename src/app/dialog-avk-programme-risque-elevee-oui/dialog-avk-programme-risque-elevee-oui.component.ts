import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeRisqueEleveeNonComponent } from '../dialog-avk-programme-risque-elevee-non/dialog-avk-programme-risque-elevee-non.component';
import { DialogAvkProgrammeRisqueEleveeOuiResComponent } from '../dialog-avk-programme-risque-elevee-oui-res/dialog-avk-programme-risque-elevee-oui-res.component';

@Component({
  selector: 'app-dialog-avk-programme-risque-elevee-oui',
  templateUrl: './dialog-avk-programme-risque-elevee-oui.component.html',
  styleUrls: ['./dialog-avk-programme-risque-elevee-oui.component.css']
})
export class DialogAvkProgrammeRisqueEleveeOuiComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkProgrammeRisqueEleveeOuiResComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAvkProgrammeRisqueEleveeNonComponent)
  }

}
