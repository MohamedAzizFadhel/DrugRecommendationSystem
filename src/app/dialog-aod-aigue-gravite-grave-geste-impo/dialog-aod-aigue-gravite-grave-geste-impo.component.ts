import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodAigueGraviteGraveGesteImpoConcComponent } from '../dialog-aod-aigue-gravite-grave-geste-impo-conc/dialog-aod-aigue-gravite-grave-geste-impo-conc.component';

@Component({
  selector: 'app-dialog-aod-aigue-gravite-grave-geste-impo',
  templateUrl: './dialog-aod-aigue-gravite-grave-geste-impo.component.html',
  styleUrls: ['./dialog-aod-aigue-gravite-grave-geste-impo.component.css']
})
export class DialogAodAigueGraviteGraveGesteImpoComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodAigueGraviteGraveGesteImpoConcComponent);
  } 

}
