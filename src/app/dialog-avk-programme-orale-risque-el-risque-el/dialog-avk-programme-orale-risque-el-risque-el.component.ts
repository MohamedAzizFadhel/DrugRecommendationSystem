import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeOraleRisqueElRisqueElNonComponent } from '../dialog-avk-programme-orale-risque-el-risque-el-non/dialog-avk-programme-orale-risque-el-risque-el-non.component';
import { DialogAvkProgrammeOraleRisqueElRisqueElOuiComponent } from '../dialog-avk-programme-orale-risque-el-risque-el-oui/dialog-avk-programme-orale-risque-el-risque-el-oui.component';
import { DialogAvkProgrammeOraleRisqueElComponent } from '../dialog-avk-programme-orale-risque-el/dialog-avk-programme-orale-risque-el.component';

@Component({
  selector: 'app-dialog-avk-programme-orale-risque-el-risque-el',
  templateUrl: './dialog-avk-programme-orale-risque-el-risque-el.component.html',
  styleUrls: ['./dialog-avk-programme-orale-risque-el-risque-el.component.css']
})
export class DialogAvkProgrammeOraleRisqueElRisqueElComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkProgrammeOraleRisqueElRisqueElOuiComponent)
  }

}
