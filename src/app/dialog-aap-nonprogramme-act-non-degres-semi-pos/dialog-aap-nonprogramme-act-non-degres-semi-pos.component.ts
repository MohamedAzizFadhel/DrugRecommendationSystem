import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapNonprogrammeActNonDegresSemiPosNonComponent } from '../dialog-aap-nonprogramme-act-non-degres-semi-pos-non/dialog-aap-nonprogramme-act-non-degres-semi-pos-non.component';
import { DialogAapNonprogrammeActNonDegresSemiPosOuiComponent } from '../dialog-aap-nonprogramme-act-non-degres-semi-pos-oui/dialog-aap-nonprogramme-act-non-degres-semi-pos-oui.component';

@Component({
  selector: 'app-dialog-aap-nonprogramme-act-non-degres-semi-pos',
  templateUrl: './dialog-aap-nonprogramme-act-non-degres-semi-pos.component.html',
  styleUrls: ['./dialog-aap-nonprogramme-act-non-degres-semi-pos.component.css']
})
export class DialogAapNonprogrammeActNonDegresSemiPosComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapNonprogrammeActNonDegresSemiPosOuiComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapNonprogrammeActNonDegresSemiPosNonComponent)
  }

}
