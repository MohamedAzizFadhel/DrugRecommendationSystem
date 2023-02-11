import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodAigueGraviteGraveGesteEffComponent } from '../dialog-aod-aigue-gravite-grave-geste-eff/dialog-aod-aigue-gravite-grave-geste-eff.component';
import { DialogAodAigueGraviteGraveGesteImpoComponent } from '../dialog-aod-aigue-gravite-grave-geste-impo/dialog-aod-aigue-gravite-grave-geste-impo.component';

@Component({
  selector: 'app-dialog-aod-aigue-gravite-grave-geste',
  templateUrl: './dialog-aod-aigue-gravite-grave-geste.component.html',
  styleUrls: ['./dialog-aod-aigue-gravite-grave-geste.component.css']
})
export class DialogAodAigueGraviteGraveGesteComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodAigueGraviteGraveGesteImpoComponent);
  } 
  openDialog2() {
    this.dialog.open(DialogAodAigueGraviteGraveGesteEffComponent);
  } 

}
