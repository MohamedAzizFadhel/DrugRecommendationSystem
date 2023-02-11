import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeXabanRisqueTresConcNonComponent } from '../dialog-aod-nonprogramme-xaban-risque-tres-conc-non/dialog-aod-nonprogramme-xaban-risque-tres-conc-non.component';
import { DialogAodNonprogrammeXabanRisqueTresConcOuiComponent } from '../dialog-aod-nonprogramme-xaban-risque-tres-conc-oui/dialog-aod-nonprogramme-xaban-risque-tres-conc-oui.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-xaban-risque-tres-conc',
  templateUrl: './dialog-aod-nonprogramme-xaban-risque-tres-conc.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-xaban-risque-tres-conc.component.css']
})
export class DialogAodNonprogrammeXabanRisqueTresConcComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueTresConcOuiComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueTresConcNonComponent);
  }

}
