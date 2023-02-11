import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapProgrammeRisqueElComponent } from '../dialog-aap-programme-risque-el/dialog-aap-programme-risque-el.component';
import { DialogAapProgrammeRisqueInterRisqueElComponent } from '../dialog-aap-programme-risque-inter-risque-el/dialog-aap-programme-risque-inter-risque-el.component';
import { DialogAapProgrammeRisqueInterRisqueFaibleComponent } from '../dialog-aap-programme-risque-inter-risque-faible/dialog-aap-programme-risque-inter-risque-faible.component';
import { DialogAapProgrammeRisqueInterRisqueInterComponent } from '../dialog-aap-programme-risque-inter-risque-inter/dialog-aap-programme-risque-inter-risque-inter.component';
import { DialogAapProgrammeRisqueInterRisqueTelComponent } from '../dialog-aap-programme-risque-inter-risque-tel/dialog-aap-programme-risque-inter-risque-tel.component';

@Component({
  selector: 'app-dialog-aap-programme-risque-inter-risque',
  templateUrl: './dialog-aap-programme-risque-inter-risque.component.html',
  styleUrls: ['./dialog-aap-programme-risque-inter-risque.component.css']
})
export class DialogAapProgrammeRisqueInterRisqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapProgrammeRisqueInterRisqueFaibleComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapProgrammeRisqueInterRisqueInterComponent)
  }
  openDialog3(){
    this.dialog.open(DialogAapProgrammeRisqueInterRisqueElComponent)
  }
  openDialog4(){
    this.dialog.open(DialogAapProgrammeRisqueInterRisqueTelComponent)
  }

}
