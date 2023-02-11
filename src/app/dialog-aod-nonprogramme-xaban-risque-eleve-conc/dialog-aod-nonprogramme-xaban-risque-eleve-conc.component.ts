import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre200Component } from '../dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre30Component } from '../dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcInfComponent } from '../dialog-aod-nonprogramme-xaban-risque-eleve-conc-inf/dialog-aod-nonprogramme-xaban-risque-eleve-conc-inf.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcSupComponent } from '../dialog-aod-nonprogramme-xaban-risque-eleve-conc-sup/dialog-aod-nonprogramme-xaban-risque-eleve-conc-sup.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-xaban-risque-eleve-conc',
  templateUrl: './dialog-aod-nonprogramme-xaban-risque-eleve-conc.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-xaban-risque-eleve-conc.component.css']
})
export class DialogAodNonprogrammeXabanRisqueEleveConcComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueEleveConcInfComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueEleveConcEntre30Component);
  }
  openDialog3() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueEleveConcEntre200Component);
  }
  openDialog4() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueEleveConcSupComponent);
  }

}
