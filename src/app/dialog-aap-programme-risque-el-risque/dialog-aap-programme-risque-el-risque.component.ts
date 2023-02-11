import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapProgrammeRisqueElRisqueElComponent } from '../dialog-aap-programme-risque-el-risque-el/dialog-aap-programme-risque-el-risque-el.component';
import { DialogAapProgrammeRisqueElRisqueFaibleComponent } from '../dialog-aap-programme-risque-el-risque-faible/dialog-aap-programme-risque-el-risque-faible.component';
import { DialogAapProgrammeRisqueElRisqueInterComponent } from '../dialog-aap-programme-risque-el-risque-inter/dialog-aap-programme-risque-el-risque-inter.component';
import { DialogAapProgrammeRisqueElRisqueTelComponent } from '../dialog-aap-programme-risque-el-risque-tel/dialog-aap-programme-risque-el-risque-tel.component';

@Component({
  selector: 'app-dialog-aap-programme-risque-el-risque',
  templateUrl: './dialog-aap-programme-risque-el-risque.component.html',
  styleUrls: ['./dialog-aap-programme-risque-el-risque.component.css']
})
export class DialogAapProgrammeRisqueElRisqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapProgrammeRisqueElRisqueFaibleComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapProgrammeRisqueElRisqueInterComponent)
  }
  openDialog3(){
    this.dialog.open(DialogAapProgrammeRisqueElRisqueElComponent)
  }
  openDialog4(){
    this.dialog.open(DialogAapProgrammeRisqueElRisqueTelComponent)
  }

}
