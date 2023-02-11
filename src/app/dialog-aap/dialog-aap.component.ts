import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapEndoComponent } from '../dialog-aap-endo/dialog-aap-endo.component';
import { DialogAapHemorragieComponent } from '../dialog-aap-hemorragie/dialog-aap-hemorragie.component';
import { DialogAapNonprogrammeComponent } from '../dialog-aap-nonprogramme/dialog-aap-nonprogramme.component';
import { DialogAapOraleComponent } from '../dialog-aap-orale/dialog-aap-orale.component';
import { DialogAapProgrammeComponent } from '../dialog-aap-programme/dialog-aap-programme.component';

@Component({
  selector: 'app-dialog-aap',
  templateUrl: './dialog-aap.component.html',
  styleUrls: ['./dialog-aap.component.css']
})
export class DialogAapComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogAapProgrammeComponent);
  } 
  openDialog2() {
    this.dialog.open(DialogAapEndoComponent);
  } 
  openDialog3() {
    this.dialog.open(DialogAapOraleComponent);
  } 
  openDialog4() {
    this.dialog.open(DialogAapNonprogrammeComponent);
  } 
  openDialog5() {
    this.dialog.open(DialogAapHemorragieComponent);
  } 
}
