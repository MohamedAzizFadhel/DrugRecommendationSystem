import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapOraleBiRisqueElRisqueComponent } from '../dialog-aap-orale-bi-risque-el-risque/dialog-aap-orale-bi-risque-el-risque.component';

@Component({
  selector: 'app-dialog-aap-orale-bi-risque-el',
  templateUrl: './dialog-aap-orale-bi-risque-el.component.html',
  styleUrls: ['./dialog-aap-orale-bi-risque-el.component.css']
})
export class DialogAapOraleBiRisqueElComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapOraleBiRisqueElRisqueComponent)
  }

}
