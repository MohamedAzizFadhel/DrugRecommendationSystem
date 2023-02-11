import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapEndoTypeAntiResElRisqueComponent } from '../dialog-aap-endo-type-anti-res-el-risque/dialog-aap-endo-type-anti-res-el-risque.component';

@Component({
  selector: 'app-dialog-aap-endo-type-anti-res-el',
  templateUrl: './dialog-aap-endo-type-anti-res-el.component.html',
  styleUrls: ['./dialog-aap-endo-type-anti-res-el.component.css']
})
export class DialogAapEndoTypeAntiResElComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapEndoTypeAntiResElRisqueComponent)
  }

}
