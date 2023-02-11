import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeRisqueEleveeOuiComponent } from '../dialog-avk-programme-risque-elevee-oui/dialog-avk-programme-risque-elevee-oui.component';

@Component({
  selector: 'app-dialog-avk-programme-risque-elevee',
  templateUrl: './dialog-avk-programme-risque-elevee.component.html',
  styleUrls: ['./dialog-avk-programme-risque-elevee.component.css']
})
export class DialogAvkProgrammeRisqueEleveeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkProgrammeRisqueEleveeOuiComponent)
  }

}
