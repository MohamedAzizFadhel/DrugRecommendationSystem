import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapOraleBiRisqueElComponent } from '../dialog-aap-orale-bi-risque-el/dialog-aap-orale-bi-risque-el.component';
import { DialogAapOraleBiRisqueFaibleComponent } from '../dialog-aap-orale-bi-risque-faible/dialog-aap-orale-bi-risque-faible.component';

@Component({
  selector: 'app-dialog-aap-orale-bi-risque',
  templateUrl: './dialog-aap-orale-bi-risque.component.html',
  styleUrls: ['./dialog-aap-orale-bi-risque.component.css']
})
export class DialogAapOraleBiRisqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapOraleBiRisqueFaibleComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapOraleBiRisqueElComponent)
  }

}
