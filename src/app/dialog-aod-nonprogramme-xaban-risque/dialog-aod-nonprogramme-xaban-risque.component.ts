import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeXabanRisqueEleveComponent } from '../dialog-aod-nonprogramme-xaban-risque-eleve/dialog-aod-nonprogramme-xaban-risque-eleve.component';
import { DialogAodNonprogrammeXabanRisqueFaibleComponent } from '../dialog-aod-nonprogramme-xaban-risque-faible/dialog-aod-nonprogramme-xaban-risque-faible.component';
import { DialogAodNonprogrammeXabanRisqueTresComponent } from '../dialog-aod-nonprogramme-xaban-risque-tres/dialog-aod-nonprogramme-xaban-risque-tres.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-xaban-risque',
  templateUrl: './dialog-aod-nonprogramme-xaban-risque.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-xaban-risque.component.css']
})
export class DialogAodNonprogrammeXabanRisqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueTresComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueEleveComponent);
  }

  openDialog3() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueFaibleComponent);
  }


}
