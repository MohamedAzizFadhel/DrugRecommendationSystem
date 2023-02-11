import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapProgrammeRisqueElRisqueComponent } from '../dialog-aap-programme-risque-el-risque/dialog-aap-programme-risque-el-risque.component';

@Component({
  selector: 'app-dialog-aap-programme-risque-el',
  templateUrl: './dialog-aap-programme-risque-el.component.html',
  styleUrls: ['./dialog-aap-programme-risque-el.component.css']
})
export class DialogAapProgrammeRisqueElComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapProgrammeRisqueElRisqueComponent)
  }

}
