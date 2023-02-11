import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapNonprogrammeActNonDegresSemiComponent } from '../dialog-aap-nonprogramme-act-non-degres-semi/dialog-aap-nonprogramme-act-non-degres-semi.component';
import { DialogAapNonprogrammeActNonDegresUrgentComponent } from '../dialog-aap-nonprogramme-act-non-degres-urgent/dialog-aap-nonprogramme-act-non-degres-urgent.component';

@Component({
  selector: 'app-dialog-aap-nonprogramme-act-non-degres',
  templateUrl: './dialog-aap-nonprogramme-act-non-degres.component.html',
  styleUrls: ['./dialog-aap-nonprogramme-act-non-degres.component.css']
})
export class DialogAapNonprogrammeActNonDegresComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapNonprogrammeActNonDegresUrgentComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapNonprogrammeActNonDegresSemiComponent)
  }

}
