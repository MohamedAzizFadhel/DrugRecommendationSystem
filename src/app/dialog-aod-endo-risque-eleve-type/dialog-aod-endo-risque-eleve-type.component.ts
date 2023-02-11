import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodEndoRisqueEleveTypeDabiComponent } from '../dialog-aod-endo-risque-eleve-type-dabi/dialog-aod-endo-risque-eleve-type-dabi.component';
import { DialogAodEndoRisqueEleveTypeXabanComponent } from '../dialog-aod-endo-risque-eleve-type-xaban/dialog-aod-endo-risque-eleve-type-xaban.component';

@Component({
  selector: 'app-dialog-aod-endo-risque-eleve-type',
  templateUrl: './dialog-aod-endo-risque-eleve-type.component.html',
  styleUrls: ['./dialog-aod-endo-risque-eleve-type.component.css']
})
export class DialogAodEndoRisqueEleveTypeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodEndoRisqueEleveTypeXabanComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodEndoRisqueEleveTypeDabiComponent);
  }


}
