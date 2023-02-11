import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeOraleRisqueElRisqueComponent } from '../dialog-avk-programme-orale-risque-el-risque/dialog-avk-programme-orale-risque-el-risque.component';

@Component({
  selector: 'app-dialog-avk-programme-orale-risque-el',
  templateUrl: './dialog-avk-programme-orale-risque-el.component.html',
  styleUrls: ['./dialog-avk-programme-orale-risque-el.component.css']
})
export class DialogAvkProgrammeOraleRisqueElComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkProgrammeOraleRisqueElRisqueComponent)
  }

}
