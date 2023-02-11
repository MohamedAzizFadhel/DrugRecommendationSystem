import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapProgrammeRisqueElComponent } from '../dialog-aap-programme-risque-el/dialog-aap-programme-risque-el.component';
import { DialogAapProgrammeRisqueFaibleComponent } from '../dialog-aap-programme-risque-faible/dialog-aap-programme-risque-faible.component';
import { DialogAapProgrammeRisqueInterComponent } from '../dialog-aap-programme-risque-inter/dialog-aap-programme-risque-inter.component';

@Component({
  selector: 'app-dialog-aap-programme-risque',
  templateUrl: './dialog-aap-programme-risque.component.html',
  styleUrls: ['./dialog-aap-programme-risque.component.css']
})
export class DialogAapProgrammeRisqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapProgrammeRisqueFaibleComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapProgrammeRisqueInterComponent)
  }
  openDialog3(){
    this.dialog.open(DialogAapProgrammeRisqueElComponent)
  }

}
