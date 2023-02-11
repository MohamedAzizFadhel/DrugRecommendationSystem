import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeDabiComponent } from '../dialog-aod-nonprogramme-dabi/dialog-aod-nonprogramme-dabi.component';
import { DialogAodNonprogrammeXabanComponent } from '../dialog-aod-nonprogramme-xaban/dialog-aod-nonprogramme-xaban.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme',
  templateUrl: './dialog-aod-nonprogramme.component.html',
  styleUrls: ['./dialog-aod-nonprogramme.component.css']
})
export class DialogAodNonprogrammeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeDabiComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodNonprogrammeXabanComponent);
  }

}
