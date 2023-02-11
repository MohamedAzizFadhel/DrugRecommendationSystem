import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodNonprogrammeDabiRisqueComponent } from '../dialog-aod-nonprogramme-dabi-risque/dialog-aod-nonprogramme-dabi-risque.component';

@Component({
  selector: 'app-dialog-aod-nonprogramme-dabi',
  templateUrl: './dialog-aod-nonprogramme-dabi.component.html',
  styleUrls: ['./dialog-aod-nonprogramme-dabi.component.css']
})
export class DialogAodNonprogrammeDabiComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodNonprogrammeDabiRisqueComponent);
  }

}
