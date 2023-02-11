import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeXabanRisqueEleveConcComponent } from '../dialog-aod-nonprogramme-xaban-risque-eleve-conc/dialog-aod-nonprogramme-xaban-risque-eleve-conc.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-xaban-risque-eleve',
  templateUrl: './dialog-aod-nonprogramme-xaban-risque-eleve.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-xaban-risque-eleve.component.css']
})
export class DialogAodNonprogrammeXabanRisqueEleveComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueEleveConcComponent);
  }

}
