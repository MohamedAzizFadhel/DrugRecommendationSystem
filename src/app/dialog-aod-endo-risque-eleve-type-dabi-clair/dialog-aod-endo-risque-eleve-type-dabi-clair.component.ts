import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodEndoRisqueEleveTypeDabiClairEntreComponent } from '../dialog-aod-endo-risque-eleve-type-dabi-clair-entre/dialog-aod-endo-risque-eleve-type-dabi-clair-entre.component';
import { DialogAodEndoRisqueEleveTypeDabiClairSupComponent } from '../dialog-aod-endo-risque-eleve-type-dabi-clair-sup/dialog-aod-endo-risque-eleve-type-dabi-clair-sup.component';

@Component({
  selector: 'app-dialog-aod-endo-risque-eleve-type-dabi-clair',
  templateUrl: './dialog-aod-endo-risque-eleve-type-dabi-clair.component.html',
  styleUrls: ['./dialog-aod-endo-risque-eleve-type-dabi-clair.component.css']
})
export class DialogAodEndoRisqueEleveTypeDabiClairComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodEndoRisqueEleveTypeDabiClairEntreComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodEndoRisqueEleveTypeDabiClairSupComponent);
  }

}
