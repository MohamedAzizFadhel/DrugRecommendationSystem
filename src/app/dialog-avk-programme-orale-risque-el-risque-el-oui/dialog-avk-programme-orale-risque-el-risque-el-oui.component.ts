import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeOraleRisqueElRisqueElNonComponent } from '../dialog-avk-programme-orale-risque-el-risque-el-non/dialog-avk-programme-orale-risque-el-risque-el-non.component';
import { DialogAvkProgrammeOraleRisqueElRisqueElOuiResComponent } from '../dialog-avk-programme-orale-risque-el-risque-el-oui-res/dialog-avk-programme-orale-risque-el-risque-el-oui-res.component';

@Component({
  selector: 'app-dialog-avk-programme-orale-risque-el-risque-el-oui',
  templateUrl: './dialog-avk-programme-orale-risque-el-risque-el-oui.component.html',
  styleUrls: ['./dialog-avk-programme-orale-risque-el-risque-el-oui.component.css']
})
export class DialogAvkProgrammeOraleRisqueElRisqueElOuiComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkProgrammeOraleRisqueElRisqueElOuiResComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAvkProgrammeOraleRisqueElRisqueElNonComponent)
  }

}
