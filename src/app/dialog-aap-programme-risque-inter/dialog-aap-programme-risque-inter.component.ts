import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapProgrammeRisqueInterRisqueComponent } from '../dialog-aap-programme-risque-inter-risque/dialog-aap-programme-risque-inter-risque.component';

@Component({
  selector: 'app-dialog-aap-programme-risque-inter',
  templateUrl: './dialog-aap-programme-risque-inter.component.html',
  styleUrls: ['./dialog-aap-programme-risque-inter.component.css']
})
export class DialogAapProgrammeRisqueInterComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapProgrammeRisqueInterRisqueComponent)
  }

}
