import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossComponent } from '../dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30',
  templateUrl: './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30.component.css']
})
export class DialogAodNonprogrammeXabanRisqueEleveConcEntre30Component implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossComponent);
  }

}
