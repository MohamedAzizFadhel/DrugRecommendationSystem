import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeOraleRisqueElRisqueElComponent } from '../dialog-avk-programme-orale-risque-el-risque-el/dialog-avk-programme-orale-risque-el-risque-el.component';
import { DialogAvkProgrammeOraleRisqueElRisqueFaibleComponent } from '../dialog-avk-programme-orale-risque-el-risque-faible/dialog-avk-programme-orale-risque-el-risque-faible.component';

@Component({
  selector: 'app-dialog-avk-programme-orale-risque-el-risque',
  templateUrl: './dialog-avk-programme-orale-risque-el-risque.component.html',
  styleUrls: ['./dialog-avk-programme-orale-risque-el-risque.component.css']
})
export class DialogAvkProgrammeOraleRisqueElRisqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkProgrammeOraleRisqueElRisqueFaibleComponent)
    
  }
  openDialog2(){
    this.dialog.open(DialogAvkProgrammeOraleRisqueElRisqueElComponent)
  }

}
