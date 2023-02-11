import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodAigueGraviteGraveGesteImpoConcNonRevComponent } from '../dialog-aod-aigue-gravite-grave-geste-impo-conc-non-rev/dialog-aod-aigue-gravite-grave-geste-impo-conc-non-rev.component';

@Component({
  selector: 'app-dialog-aod-aigue-gravite-grave-geste-impo-conc-non',
  templateUrl: './dialog-aod-aigue-gravite-grave-geste-impo-conc-non.component.html',
  styleUrls: ['./dialog-aod-aigue-gravite-grave-geste-impo-conc-non.component.css']
})
export class DialogAodAigueGraviteGraveGesteImpoConcNonComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodAigueGraviteGraveGesteImpoConcNonRevComponent);
  } 

}
