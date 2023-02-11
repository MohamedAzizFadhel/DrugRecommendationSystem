import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapEndoTypeAntiResComponent } from '../dialog-aap-endo-type-anti-res/dialog-aap-endo-type-anti-res.component';
import { DialogAapEndoTypeAspirineResComponent } from '../dialog-aap-endo-type-aspirine-res/dialog-aap-endo-type-aspirine-res.component';

@Component({
  selector: 'app-dialog-aap-endo-type-aspirine',
  templateUrl: './dialog-aap-endo-type-aspirine.component.html',
  styleUrls: ['./dialog-aap-endo-type-aspirine.component.css']
})
export class DialogAapEndoTypeAspirineComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapEndoTypeAspirineResComponent)
  }

}
