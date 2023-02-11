import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossNonComponent } from '../dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss-non/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss-non.component';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossOuiComponent } from '../dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss-oui/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss-oui.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss',
  templateUrl: './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss.component.css']
})
export class DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossOuiComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossNonComponent);
  }

}
