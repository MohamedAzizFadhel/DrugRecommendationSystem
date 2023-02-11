import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossComponent } from '../dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss/dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200',
  templateUrl: './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200.component.css']
})
export class DialogAodNonprogrammeXabanRisqueEleveConcEntre200Component implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossComponent);
  }

}
