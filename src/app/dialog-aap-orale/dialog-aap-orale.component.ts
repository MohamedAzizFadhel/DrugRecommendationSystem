import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapOraleBiComponent } from '../dialog-aap-orale-bi/dialog-aap-orale-bi.component';
import { DialogAapOraleMonoComponent } from '../dialog-aap-orale-mono/dialog-aap-orale-mono.component';

@Component({
  selector: 'app-dialog-aap-orale',
  templateUrl: './dialog-aap-orale.component.html',
  styleUrls: ['./dialog-aap-orale.component.css']
})
export class DialogAapOraleComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapOraleMonoComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapOraleBiComponent)
  }

}
