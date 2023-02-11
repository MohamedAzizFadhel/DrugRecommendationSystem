import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodEndoRisqueComponent } from '../dialog-aod-endo-risque/dialog-aod-endo-risque.component';

@Component({
  selector: 'app-dialog-aod-endo',
  templateUrl: './dialog-aod-endo.component.html',
  styleUrls: ['./dialog-aod-endo.component.css']
})
export class DialogAodEndoComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogAodEndoRisqueComponent);
  } 

}
