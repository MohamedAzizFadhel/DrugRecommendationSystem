import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodProgrammeRisqueInterDabiClairComponent } from '../dialog-aod-programme-risque-inter-dabi-clair/dialog-aod-programme-risque-inter-dabi-clair.component';

@Component({
  selector: 'app-dialog-aod-programme-risque-inter-dabi',
  templateUrl: './dialog-aod-programme-risque-inter-dabi.component.html',
  styleUrls: ['./dialog-aod-programme-risque-inter-dabi.component.css']
})
export class DialogAodProgrammeRisqueInterDabiComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogAodProgrammeRisqueInterDabiClairComponent);
  }

}
