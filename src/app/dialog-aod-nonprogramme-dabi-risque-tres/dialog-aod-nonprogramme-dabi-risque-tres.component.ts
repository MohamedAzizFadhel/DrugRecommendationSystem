import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeDabiRisqueTresConcComponent } from '../dialog-aod-nonprogramme-dabi-risque-tres-conc/dialog-aod-nonprogramme-dabi-risque-tres-conc.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-dabi-risque-tres',
  templateUrl: './dialog-aod-nonprogramme-dabi-risque-tres.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-dabi-risque-tres.component.css']
})
export class DialogAodNonprogrammeDabiRisqueTresComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeDabiRisqueTresConcComponent);
  }
}
