import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodOraleRisqueComponent } from '../dialog-aod-orale-risque/dialog-aod-orale-risque.component';

@Component({
  selector: 'app-dialog-aod-orale',
  templateUrl: './dialog-aod-orale.component.html',
  styleUrls: ['./dialog-aod-orale.component.css']
})
export class DialogAodOraleComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodOraleRisqueComponent);
  }

}
