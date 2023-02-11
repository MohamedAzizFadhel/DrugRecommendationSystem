import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodProgrammeRisqueInterDabiClairEntreComponent } from '../dialog-aod-programme-risque-inter-dabi-clair-entre/dialog-aod-programme-risque-inter-dabi-clair-entre.component';
import { DialogAodProgrammeRisqueInterDabiClairOuiComponent } from '../dialog-aod-programme-risque-inter-dabi-clair-oui/dialog-aod-programme-risque-inter-dabi-clair-oui.component';

@Component({
  selector: 'app-dialog-aod-programme-risque-inter-dabi-clair',
  templateUrl: './dialog-aod-programme-risque-inter-dabi-clair.component.html',
  styleUrls: ['./dialog-aod-programme-risque-inter-dabi-clair.component.css']
})
export class DialogAodProgrammeRisqueInterDabiClairComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog1() {
    this.dialog.open(DialogAodProgrammeRisqueInterDabiClairOuiComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodProgrammeRisqueInterDabiClairEntreComponent);
  }

}
