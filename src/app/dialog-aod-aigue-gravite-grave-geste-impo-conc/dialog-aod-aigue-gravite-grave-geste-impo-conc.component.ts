import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodAigueGraviteGraveGesteImpoConcNonComponent } from '../dialog-aod-aigue-gravite-grave-geste-impo-conc-non/dialog-aod-aigue-gravite-grave-geste-impo-conc-non.component';
import { DialogAodAigueGraviteGraveGesteImpoConcOuiComponent } from '../dialog-aod-aigue-gravite-grave-geste-impo-conc-oui/dialog-aod-aigue-gravite-grave-geste-impo-conc-oui.component';

@Component({
  selector: 'app-dialog-aod-aigue-gravite-grave-geste-impo-conc',
  templateUrl: './dialog-aod-aigue-gravite-grave-geste-impo-conc.component.html',
  styleUrls: ['./dialog-aod-aigue-gravite-grave-geste-impo-conc.component.css']
})
export class DialogAodAigueGraviteGraveGesteImpoConcComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodAigueGraviteGraveGesteImpoConcOuiComponent);
  } 
  openDialog2() {
    this.dialog.open(DialogAodAigueGraviteGraveGesteImpoConcNonComponent);
  } 

}
