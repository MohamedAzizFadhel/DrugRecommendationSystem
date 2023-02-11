import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossNonComponent } from '../dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss-non/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss-non.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossOuiComponent } from '../dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss-oui/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss-oui.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss',
  templateUrl: './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss.component.css']
})
export class DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossOuiComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossNonComponent);
  }

}
