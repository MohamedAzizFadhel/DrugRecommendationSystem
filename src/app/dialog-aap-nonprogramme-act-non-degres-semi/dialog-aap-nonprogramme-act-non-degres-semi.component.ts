import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapNonprogrammeActNonDegresSemiPosComponent } from '../dialog-aap-nonprogramme-act-non-degres-semi-pos/dialog-aap-nonprogramme-act-non-degres-semi-pos.component';

@Component({
  selector: 'app-dialog-aap-nonprogramme-act-non-degres-semi',
  templateUrl: './dialog-aap-nonprogramme-act-non-degres-semi.component.html',
  styleUrls: ['./dialog-aap-nonprogramme-act-non-degres-semi.component.css']
})
export class DialogAapNonprogrammeActNonDegresSemiComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapNonprogrammeActNonDegresSemiPosComponent)
  }

}
