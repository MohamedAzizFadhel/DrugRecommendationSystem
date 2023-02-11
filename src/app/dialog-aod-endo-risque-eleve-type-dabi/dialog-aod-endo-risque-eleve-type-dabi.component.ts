import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodEndoRisqueEleveTypeDabiClairComponent } from '../dialog-aod-endo-risque-eleve-type-dabi-clair/dialog-aod-endo-risque-eleve-type-dabi-clair.component';

@Component({
  selector: 'app-dialog-aod-endo-risque-eleve-type-dabi',
  templateUrl: './dialog-aod-endo-risque-eleve-type-dabi.component.html',
  styleUrls: ['./dialog-aod-endo-risque-eleve-type-dabi.component.css']
})
export class DialogAodEndoRisqueEleveTypeDabiComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodEndoRisqueEleveTypeDabiClairComponent);
  }

}
