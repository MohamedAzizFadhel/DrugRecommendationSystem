import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodAigueGraviteCritiqueComponent } from '../dialog-aod-aigue-gravite-critique/dialog-aod-aigue-gravite-critique.component';
import { DialogAodAigueGraviteGraveComponent } from '../dialog-aod-aigue-gravite-grave/dialog-aod-aigue-gravite-grave.component';
import { DialogAodAigueGraviteNonComponent } from '../dialog-aod-aigue-gravite-non/dialog-aod-aigue-gravite-non.component';

@Component({
  selector: 'app-dialog-aod-aigue-gravite',
  templateUrl: './dialog-aod-aigue-gravite.component.html',
  styleUrls: ['./dialog-aod-aigue-gravite.component.css']
})
export class DialogAodAigueGraviteComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodAigueGraviteCritiqueComponent);
  } 
  openDialog2() {
    this.dialog.open(DialogAodAigueGraviteGraveComponent);
  } 
  openDialog3() {
    this.dialog.open(DialogAodAigueGraviteNonComponent);
  }
}
