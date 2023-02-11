import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeDabiRisqueEleveSupPossComponent } from '../dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss/dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-dabi-risque-eleve-sup',
  templateUrl: './dialog-aod-nonprogramme-dabi-risque-eleve-sup.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-dabi-risque-eleve-sup.component.css']
})
export class DialogAodNonprogrammeDabiRisqueEleveSupComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeDabiRisqueEleveSupPossComponent);
  }

}
