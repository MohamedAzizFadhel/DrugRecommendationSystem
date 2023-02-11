import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapProgrammeRisqueInterRisqueTelResComponent } from '../dialog-aap-programme-risque-inter-risque-tel-res/dialog-aap-programme-risque-inter-risque-tel-res.component';

@Component({
  selector: 'app-dialog-aap-programme-risque-inter-risque-tel',
  templateUrl: './dialog-aap-programme-risque-inter-risque-tel.component.html',
  styleUrls: ['./dialog-aap-programme-risque-inter-risque-tel.component.css']
})
export class DialogAapProgrammeRisqueInterRisqueTelComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapProgrammeRisqueInterRisqueTelResComponent)
  }

}
