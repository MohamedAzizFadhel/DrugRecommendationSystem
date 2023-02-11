import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapEndoTypeAntiComponent } from '../dialog-aap-endo-type-anti/dialog-aap-endo-type-anti.component';
import { DialogAapEndoTypeAspirineComponent } from '../dialog-aap-endo-type-aspirine/dialog-aap-endo-type-aspirine.component';

@Component({
  selector: 'app-dialog-aap-endo-type',
  templateUrl: './dialog-aap-endo-type.component.html',
  styleUrls: ['./dialog-aap-endo-type.component.css']
})
export class DialogAapEndoTypeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapEndoTypeAspirineComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapEndoTypeAntiComponent)
  }

}
