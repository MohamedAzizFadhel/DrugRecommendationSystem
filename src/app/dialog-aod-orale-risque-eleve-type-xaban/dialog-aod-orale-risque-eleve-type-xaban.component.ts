import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodOraleRisqueEleveTypeXabanClairComponent } from '../dialog-aod-orale-risque-eleve-type-xaban-clair/dialog-aod-orale-risque-eleve-type-xaban-clair.component';

@Component({
  selector: 'app-dialog-aod-orale-risque-eleve-type-xaban',
  templateUrl: './dialog-aod-orale-risque-eleve-type-xaban.component.html',
  styleUrls: ['./dialog-aod-orale-risque-eleve-type-xaban.component.css']
})
export class DialogAodOraleRisqueEleveTypeXabanComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodOraleRisqueEleveTypeXabanClairComponent);
  }

}
