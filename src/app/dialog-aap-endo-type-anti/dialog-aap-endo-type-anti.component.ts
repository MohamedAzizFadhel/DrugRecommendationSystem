import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapEndoTypeAntiResComponent } from '../dialog-aap-endo-type-anti-res/dialog-aap-endo-type-anti-res.component';
import { DialogAapEndoTypeAspirineResComponent } from '../dialog-aap-endo-type-aspirine-res/dialog-aap-endo-type-aspirine-res.component';

@Component({
  selector: 'app-dialog-aap-endo-type-anti',
  templateUrl: './dialog-aap-endo-type-anti.component.html',
  styleUrls: ['./dialog-aap-endo-type-anti.component.css']
})
export class DialogAapEndoTypeAntiComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapEndoTypeAntiResComponent)
  }

}
