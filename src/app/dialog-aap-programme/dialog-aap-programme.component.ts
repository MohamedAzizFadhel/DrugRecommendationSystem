import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapProgrammeRisqueComponent } from '../dialog-aap-programme-risque/dialog-aap-programme-risque.component';

@Component({
  selector: 'app-dialog-aap-programme',
  templateUrl: './dialog-aap-programme.component.html',
  styleUrls: ['./dialog-aap-programme.component.css']
})
export class DialogAapProgrammeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapProgrammeRisqueComponent)
  }

}
