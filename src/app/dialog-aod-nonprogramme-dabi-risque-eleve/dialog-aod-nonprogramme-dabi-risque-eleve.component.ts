import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeDabiRisqueEleveInfComponent } from '../dialog-aod-nonprogramme-dabi-risque-eleve-inf/dialog-aod-nonprogramme-dabi-risque-eleve-inf.component';
import { DialogAodNonprogrammeDabiRisqueEleveSupComponent } from '../dialog-aod-nonprogramme-dabi-risque-eleve-sup/dialog-aod-nonprogramme-dabi-risque-eleve-sup.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-dabi-risque-eleve',
  templateUrl: './dialog-aod-nonprogramme-dabi-risque-eleve.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-dabi-risque-eleve.component.css']
})
export class DialogAodNonprogrammeDabiRisqueEleveComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeDabiRisqueEleveInfComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodNonprogrammeDabiRisqueEleveSupComponent);
  }

}
