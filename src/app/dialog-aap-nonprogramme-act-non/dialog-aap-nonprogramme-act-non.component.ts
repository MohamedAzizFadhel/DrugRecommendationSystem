import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapNonprogrammeActNonDegresComponent } from '../dialog-aap-nonprogramme-act-non-degres/dialog-aap-nonprogramme-act-non-degres.component';

@Component({
  selector: 'app-dialog-aap-nonprogramme-act-non',
  templateUrl: './dialog-aap-nonprogramme-act-non.component.html',
  styleUrls: ['./dialog-aap-nonprogramme-act-non.component.css']
})
export class DialogAapNonprogrammeActNonComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapNonprogrammeActNonDegresComponent)
  }

}
