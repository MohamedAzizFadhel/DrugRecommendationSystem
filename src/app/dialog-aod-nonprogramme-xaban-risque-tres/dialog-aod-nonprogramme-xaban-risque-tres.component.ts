import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeXabanRisqueTresConcComponent } from '../dialog-aod-nonprogramme-xaban-risque-tres-conc/dialog-aod-nonprogramme-xaban-risque-tres-conc.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-xaban-risque-tres',
  templateUrl: './dialog-aod-nonprogramme-xaban-risque-tres.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-xaban-risque-tres.component.css']
})
export class DialogAodNonprogrammeXabanRisqueTresComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueTresConcComponent);
  }

}
