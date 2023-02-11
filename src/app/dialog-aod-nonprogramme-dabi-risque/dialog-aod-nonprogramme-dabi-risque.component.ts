import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeDabiRisqueEleveComponent } from '../dialog-aod-nonprogramme-dabi-risque-eleve/dialog-aod-nonprogramme-dabi-risque-eleve.component';
import { DialogAodNonprogrammeDabiRisqueFaibleComponent } from '../dialog-aod-nonprogramme-dabi-risque-faible/dialog-aod-nonprogramme-dabi-risque-faible.component';
import { DialogAodNonprogrammeDabiRisqueTresComponent } from '../dialog-aod-nonprogramme-dabi-risque-tres/dialog-aod-nonprogramme-dabi-risque-tres.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-dabi-risque',
  templateUrl: './dialog-aod-nonprogramme-dabi-risque.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-dabi-risque.component.css']
})
export class DialogAodNonprogrammeDabiRisqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeDabiRisqueTresComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodNonprogrammeDabiRisqueEleveComponent);
  }
  openDialog3() {
    this.dialog.open(DialogAodNonprogrammeDabiRisqueFaibleComponent);
  }

}
