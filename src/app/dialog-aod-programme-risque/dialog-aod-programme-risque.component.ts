import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodProgrammeRisqueFaibleComponent } from '../dialog-aod-programme-risque-faible/dialog-aod-programme-risque-faible.component';
import { DialogAodProgrammeRisqueInterComponent } from '../dialog-aod-programme-risque-inter/dialog-aod-programme-risque-inter.component';
import { DialogAodProgrammeRisqueMajComponent } from '../dialog-aod-programme-risque-maj/dialog-aod-programme-risque-maj.component';

@Component({
  selector: 'app-dialog-aod-programme-risque',
  templateUrl: './dialog-aod-programme-risque.component.html',
  styleUrls: ['./dialog-aod-programme-risque.component.css']
})
export class DialogAodProgrammeRisqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog1() {
    this.dialog.open(DialogAodProgrammeRisqueFaibleComponent);
  } 
  openDialog2() {
    this.dialog.open(DialogAodProgrammeRisqueInterComponent);
  } 
  openDialog3() {
    this.dialog.open(DialogAodProgrammeRisqueMajComponent);
  } 

}
