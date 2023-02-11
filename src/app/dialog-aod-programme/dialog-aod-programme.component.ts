import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodProgrammeRisqueComponent } from '../dialog-aod-programme-risque/dialog-aod-programme-risque.component';

@Component({
  selector: 'app-dialog-aod-programme',
  templateUrl: './dialog-aod-programme.component.html',
  styleUrls: ['./dialog-aod-programme.component.css']
})
export class DialogAodProgrammeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogAodProgrammeRisqueComponent);
  } 

}
