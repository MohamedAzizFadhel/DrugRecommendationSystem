import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodOraleRisqueEleveTypeDabiComponent } from '../dialog-aod-orale-risque-eleve-type-dabi/dialog-aod-orale-risque-eleve-type-dabi.component';
import { DialogAodOraleRisqueEleveTypeXabanComponent } from '../dialog-aod-orale-risque-eleve-type-xaban/dialog-aod-orale-risque-eleve-type-xaban.component';

@Component({
  selector: 'app-dialog-aod-orale-risque-eleve-type',
  templateUrl: './dialog-aod-orale-risque-eleve-type.component.html',
  styleUrls: ['./dialog-aod-orale-risque-eleve-type.component.css']
})
export class DialogAodOraleRisqueEleveTypeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodOraleRisqueEleveTypeXabanComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodOraleRisqueEleveTypeDabiComponent);
  }

}
