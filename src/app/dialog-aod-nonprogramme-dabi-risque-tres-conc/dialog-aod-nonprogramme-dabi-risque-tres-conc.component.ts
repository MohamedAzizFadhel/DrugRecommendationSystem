import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeDabiRisqueTresConcNonComponent } from '../dialog-aod-nonprogramme-dabi-risque-tres-conc-non/dialog-aod-nonprogramme-dabi-risque-tres-conc-non.component';
import { DialogAodNonprogrammeDabiRisqueTresConcOuiComponent } from '../dialog-aod-nonprogramme-dabi-risque-tres-conc-oui/dialog-aod-nonprogramme-dabi-risque-tres-conc-oui.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-dabi-risque-tres-conc',
  templateUrl: './dialog-aod-nonprogramme-dabi-risque-tres-conc.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-dabi-risque-tres-conc.component.css']
})
export class DialogAodNonprogrammeDabiRisqueTresConcComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeDabiRisqueTresConcNonComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodNonprogrammeDabiRisqueTresConcOuiComponent);
  }

}
