import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapEndoTypeComponent } from '../dialog-aap-endo-type/dialog-aap-endo-type.component';

@Component({
  selector: 'app-dialog-aap-endo',
  templateUrl: './dialog-aap-endo.component.html',
  styleUrls: ['./dialog-aap-endo.component.css']
})
export class DialogAapEndoComponent implements OnInit {

  constructor(public dialog:MatDialog) { }


  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapEndoTypeComponent)
  }

}
