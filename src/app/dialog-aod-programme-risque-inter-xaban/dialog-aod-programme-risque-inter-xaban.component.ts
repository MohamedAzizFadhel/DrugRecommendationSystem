import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodProgrammeRisqueInterXabanClairComponent } from '../dialog-aod-programme-risque-inter-xaban-clair/dialog-aod-programme-risque-inter-xaban-clair.component';

@Component({
  selector: 'app-dialog-aod-programme-risque-inter-xaban',
  templateUrl: './dialog-aod-programme-risque-inter-xaban.component.html',
  styleUrls: ['./dialog-aod-programme-risque-inter-xaban.component.css']
})
export class DialogAodProgrammeRisqueInterXabanComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogAodProgrammeRisqueInterXabanClairComponent);
  } 
  

}
