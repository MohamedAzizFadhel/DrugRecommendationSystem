import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkProgrammeOraleRisqueCritiqueComponent } from '../dialog-avk-programme-orale-risque-critique/dialog-avk-programme-orale-risque-critique.component';
import { DialogAvkProgrammeOraleRisqueElComponent } from '../dialog-avk-programme-orale-risque-el/dialog-avk-programme-orale-risque-el.component';
import { DialogAvkProgrammeOraleRisqueFaibleInrComponent } from '../dialog-avk-programme-orale-risque-faible-inr/dialog-avk-programme-orale-risque-faible-inr.component';

@Component({
  selector: 'app-dialog-avk-programme-orale-risque',
  templateUrl: './dialog-avk-programme-orale-risque.component.html',
  styleUrls: ['./dialog-avk-programme-orale-risque.component.css']
})
export class DialogAvkProgrammeOraleRisqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkProgrammeOraleRisqueFaibleInrComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAvkProgrammeOraleRisqueElComponent)
  
  }
  openDialog3(){
    this.dialog.open(DialogAvkProgrammeOraleRisqueCritiqueComponent)
  }

}
