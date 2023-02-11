import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapEndoTypeAntiResElRisqueElComponent } from '../dialog-aap-endo-type-anti-res-el-risque-el/dialog-aap-endo-type-anti-res-el-risque-el.component';
import { DialogAapEndoTypeAntiResElRisqueFaibleComponent } from '../dialog-aap-endo-type-anti-res-el-risque-faible/dialog-aap-endo-type-anti-res-el-risque-faible.component';

@Component({
  selector: 'app-dialog-aap-endo-type-anti-res-el-risque',
  templateUrl: './dialog-aap-endo-type-anti-res-el-risque.component.html',
  styleUrls: ['./dialog-aap-endo-type-anti-res-el-risque.component.css']
})
export class DialogAapEndoTypeAntiResElRisqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapEndoTypeAntiResElRisqueFaibleComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapEndoTypeAntiResElRisqueElComponent)
  }

}
