import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapEndoTypeAntiResElComponent } from '../dialog-aap-endo-type-anti-res-el/dialog-aap-endo-type-anti-res-el.component';
import { DialogAapEndoTypeAntiResFaibleComponent } from '../dialog-aap-endo-type-anti-res-faible/dialog-aap-endo-type-anti-res-faible.component';
import { DialogAapEndoComponent } from '../dialog-aap-endo/dialog-aap-endo.component';

@Component({
  selector: 'app-dialog-aap-endo-type-anti-res',
  templateUrl: './dialog-aap-endo-type-anti-res.component.html',
  styleUrls: ['./dialog-aap-endo-type-anti-res.component.css']
})
export class DialogAapEndoTypeAntiResComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapEndoTypeAntiResFaibleComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapEndoTypeAntiResElComponent)
  }

}
