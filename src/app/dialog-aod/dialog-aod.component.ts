import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodAigueComponent } from '../dialog-aod-aigue/dialog-aod-aigue.component';
import { DialogAodEndoComponent } from '../dialog-aod-endo/dialog-aod-endo.component';
import { DialogAodNonprogrammeComponent } from '../dialog-aod-nonprogramme/dialog-aod-nonprogramme.component';
import { DialogAodOraleComponent } from '../dialog-aod-orale/dialog-aod-orale.component';
import { DialogAodProgrammeComponent } from '../dialog-aod-programme/dialog-aod-programme.component';

@Component({
  selector: 'app-dialog-aod',
  templateUrl: './dialog-aod.component.html',
  styleUrls: ['./dialog-aod.component.css']
})
export class DialogAodComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodProgrammeComponent);
  } 
  openDialog2(){
    this.dialog.open(DialogAodEndoComponent);
  }
  openDialog3(){
    this.dialog.open(DialogAodOraleComponent);
  }
  openDialog4(){
    this.dialog.open(DialogAodNonprogrammeComponent)
  }
  openDialog5(){
    this.dialog.open(DialogAodAigueComponent)
  }
}
