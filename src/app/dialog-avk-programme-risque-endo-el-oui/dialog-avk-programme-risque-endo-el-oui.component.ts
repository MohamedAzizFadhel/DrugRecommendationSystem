import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeRisqueEndoElNonComponent } from '../dialog-avk-programme-risque-endo-el-non/dialog-avk-programme-risque-endo-el-non.component';
import { DialogAvkProgrammeRisqueEndoElOuiResComponent } from '../dialog-avk-programme-risque-endo-el-oui-res/dialog-avk-programme-risque-endo-el-oui-res.component';
import { DialogAvkProgrammeRisqueEndoElComponent } from '../dialog-avk-programme-risque-endo-el/dialog-avk-programme-risque-endo-el.component';

@Component({
  selector: 'app-dialog-avk-programme-risque-endo-el-oui',
  templateUrl: './dialog-avk-programme-risque-endo-el-oui.component.html',
  styleUrls: ['./dialog-avk-programme-risque-endo-el-oui.component.css']
})
export class DialogAvkProgrammeRisqueEndoElOuiComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(DialogAvkProgrammeRisqueEndoElOuiResComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAvkProgrammeRisqueEndoElNonComponent)
  }
}
