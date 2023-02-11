import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapOraleMonoRisqueComponent } from '../dialog-aap-orale-mono-risque/dialog-aap-orale-mono-risque.component';

@Component({
  selector: 'app-dialog-aap-orale-mono',
  templateUrl: './dialog-aap-orale-mono.component.html',
  styleUrls: ['./dialog-aap-orale-mono.component.css']
})
export class DialogAapOraleMonoComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapOraleMonoRisqueComponent)
  }

}
