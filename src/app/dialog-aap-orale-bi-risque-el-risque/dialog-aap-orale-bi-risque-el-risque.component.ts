import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapOraleBiRisqueElRisqueElComponent } from '../dialog-aap-orale-bi-risque-el-risque-el/dialog-aap-orale-bi-risque-el-risque-el.component';
import { DialogAapOraleBiRisqueElRisqueFaibleComponent } from '../dialog-aap-orale-bi-risque-el-risque-faible/dialog-aap-orale-bi-risque-el-risque-faible.component';

@Component({
  selector: 'app-dialog-aap-orale-bi-risque-el-risque',
  templateUrl: './dialog-aap-orale-bi-risque-el-risque.component.html',
  styleUrls: ['./dialog-aap-orale-bi-risque-el-risque.component.css']
})
export class DialogAapOraleBiRisqueElRisqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapOraleBiRisqueElRisqueFaibleComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapOraleBiRisqueElRisqueElComponent)
  }

}
