import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodProgrammeRisqueInterXabanComponent } from '../dialog-aod-programme-risque-inter-xaban/dialog-aod-programme-risque-inter-xaban.component';
import { DialogAodProgrammeRisqueInterDabiComponent } from '../dialog-aod-programme-risque-inter-dabi/dialog-aod-programme-risque-inter-dabi.component';

@Component({
  selector: 'app-dialog-aod-programme-risque-inter',
  templateUrl: './dialog-aod-programme-risque-inter.component.html',
  styleUrls: ['./dialog-aod-programme-risque-inter.component.css']
})
export class DialogAodProgrammeRisqueInterComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog1() {
    this.dialog.open(DialogAodProgrammeRisqueInterXabanComponent);
  } 
  openDialog2() {
    this.dialog.open(DialogAodProgrammeRisqueInterDabiComponent);
  } 

}
