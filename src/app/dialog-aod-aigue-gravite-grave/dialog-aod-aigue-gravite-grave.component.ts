import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodAigueGraviteGraveGesteComponent } from '../dialog-aod-aigue-gravite-grave-geste/dialog-aod-aigue-gravite-grave-geste.component';

@Component({
  selector: 'app-dialog-aod-aigue-gravite-grave',
  templateUrl: './dialog-aod-aigue-gravite-grave.component.html',
  styleUrls: ['./dialog-aod-aigue-gravite-grave.component.css']
})
export class DialogAodAigueGraviteGraveComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodAigueGraviteGraveGesteComponent);
  } 
}
