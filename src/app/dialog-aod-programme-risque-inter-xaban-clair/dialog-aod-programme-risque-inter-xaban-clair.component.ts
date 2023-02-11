import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodProgrammeRisqueInterXabanOuiComponent } from '../dialog-aod-programme-risque-inter-xaban-oui/dialog-aod-programme-risque-inter-xaban-oui.component';
import { DialogAodProgrammeRisqueInterXabanNonComponent } from '../dialog-aod-programme-risque-inter-xaban-non/dialog-aod-programme-risque-inter-xaban-non.component';

@Component({
  selector: 'app-dialog-aod-programme-risque-inter-xaban-clair',
  templateUrl: './dialog-aod-programme-risque-inter-xaban-clair.component.html',
  styleUrls: ['./dialog-aod-programme-risque-inter-xaban-clair.component.css']
})
export class DialogAodProgrammeRisqueInterXabanClairComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog1() {
    this.dialog.open(DialogAodProgrammeRisqueInterXabanOuiComponent);
  } 
  openDialog2() {
    this.dialog.open(DialogAodProgrammeRisqueInterXabanNonComponent);
  } 

}
