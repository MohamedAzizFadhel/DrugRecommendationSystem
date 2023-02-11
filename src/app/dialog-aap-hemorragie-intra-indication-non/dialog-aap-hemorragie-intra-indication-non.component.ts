import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapHemorragieIntraIndicationNonCsgComponent } from '../dialog-aap-hemorragie-intra-indication-non-csg/dialog-aap-hemorragie-intra-indication-non-csg.component';
import { DialogAapHemorragieIntraIndicationNonCsg1Component } from '../dialog-aap-hemorragie-intra-indication-non-csg1/dialog-aap-hemorragie-intra-indication-non-csg1.component';

@Component({
  selector: 'app-dialog-aap-hemorragie-intra-indication-non',
  templateUrl: './dialog-aap-hemorragie-intra-indication-non.component.html',
  styleUrls: ['./dialog-aap-hemorragie-intra-indication-non.component.css']
})
export class DialogAapHemorragieIntraIndicationNonComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapHemorragieIntraIndicationNonCsgComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapHemorragieIntraIndicationNonCsg1Component)
  }

}
