import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeDabiRisqueEleveSupPossNonComponent } from '../dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss-non/dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss-non.component';
import { DialogAodNonprogrammeDabiRisqueEleveSupPossOuiComponent } from '../dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss-oui/dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss-oui.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss',
  templateUrl: './dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss.component.css']
})
export class DialogAodNonprogrammeDabiRisqueEleveSupPossComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeDabiRisqueEleveSupPossOuiComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodNonprogrammeDabiRisqueEleveSupPossNonComponent);
  }

}
