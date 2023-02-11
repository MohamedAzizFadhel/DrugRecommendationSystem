import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodAigueGraviteCritiqueDosComponent } from '../dialog-aod-aigue-gravite-critique-dos/dialog-aod-aigue-gravite-critique-dos.component';

@Component({
  selector: 'app-dialog-aod-aigue-gravite-critique',
  templateUrl: './dialog-aod-aigue-gravite-critique.component.html',
  styleUrls: ['./dialog-aod-aigue-gravite-critique.component.css']
})
export class DialogAodAigueGraviteCritiqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodAigueGraviteCritiqueDosComponent);
  } 

}
