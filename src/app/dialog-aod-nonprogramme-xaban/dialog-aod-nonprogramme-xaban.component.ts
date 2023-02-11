import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeXabanRisqueComponent } from '../dialog-aod-nonprogramme-xaban-risque/dialog-aod-nonprogramme-xaban-risque.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-xaban',
  templateUrl: './dialog-aod-nonprogramme-xaban.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-xaban.component.css']
})
export class DialogAodNonprogrammeXabanComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeXabanRisqueComponent);
  }

}
