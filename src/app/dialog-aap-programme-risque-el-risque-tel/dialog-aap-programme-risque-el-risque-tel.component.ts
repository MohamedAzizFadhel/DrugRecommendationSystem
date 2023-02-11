import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapProgrammeRisqueElRisqueTelResComponent } from '../dialog-aap-programme-risque-el-risque-tel-res/dialog-aap-programme-risque-el-risque-tel-res.component';

@Component({
  selector: 'app-dialog-aap-programme-risque-el-risque-tel',
  templateUrl: './dialog-aap-programme-risque-el-risque-tel.component.html',
  styleUrls: ['./dialog-aap-programme-risque-el-risque-tel.component.css']
})
export class DialogAapProgrammeRisqueElRisqueTelComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapProgrammeRisqueElRisqueTelResComponent)
  }

}
