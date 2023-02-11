import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeRisqueEndoElOuiComponent } from '../dialog-avk-programme-risque-endo-el-oui/dialog-avk-programme-risque-endo-el-oui.component';

@Component({
  selector: 'app-dialog-avk-programme-risque-endo-el',
  templateUrl: './dialog-avk-programme-risque-endo-el.component.html',
  styleUrls: ['./dialog-avk-programme-risque-endo-el.component.css']
})
export class DialogAvkProgrammeRisqueEndoElComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(DialogAvkProgrammeRisqueEndoElOuiComponent)
  }
}
