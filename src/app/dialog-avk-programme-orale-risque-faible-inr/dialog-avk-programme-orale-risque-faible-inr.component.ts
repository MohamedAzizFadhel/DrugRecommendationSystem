import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeOraleRisqueFaibleInrResComponent } from '../dialog-avk-programme-orale-risque-faible-inr-res/dialog-avk-programme-orale-risque-faible-inr-res.component';

@Component({
  selector: 'app-dialog-avk-programme-orale-risque-faible-inr',
  templateUrl: './dialog-avk-programme-orale-risque-faible-inr.component.html',
  styleUrls: ['./dialog-avk-programme-orale-risque-faible-inr.component.css']
})
export class DialogAvkProgrammeOraleRisqueFaibleInrComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkProgrammeOraleRisqueFaibleInrResComponent)
  
  }

}
