import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapOraleBiRisqueComponent } from '../dialog-aap-orale-bi-risque/dialog-aap-orale-bi-risque.component';

@Component({
  selector: 'app-dialog-aap-orale-bi',
  templateUrl: './dialog-aap-orale-bi.component.html',
  styleUrls: ['./dialog-aap-orale-bi.component.css']
})
export class DialogAapOraleBiComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapOraleBiRisqueComponent)
  }

}
