import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeOraleRisqueComponent } from '../dialog-avk-programme-orale-risque/dialog-avk-programme-orale-risque.component';

@Component({
  selector: 'app-dialog-avk-programme-orale',
  templateUrl: './dialog-avk-programme-orale.component.html',
  styleUrls: ['./dialog-avk-programme-orale.component.css']
})
export class DialogAvkProgrammeOraleComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkProgrammeOraleRisqueComponent)

  }

}
