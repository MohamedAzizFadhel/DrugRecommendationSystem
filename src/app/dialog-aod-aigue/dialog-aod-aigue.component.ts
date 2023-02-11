import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodAigueGraviteComponent } from '../dialog-aod-aigue-gravite/dialog-aod-aigue-gravite.component';

@Component({
  selector: 'app-dialog-aod-aigue',
  templateUrl: './dialog-aod-aigue.component.html',
  styleUrls: ['./dialog-aod-aigue.component.css']
})
export class DialogAodAigueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogAodAigueGraviteComponent);
  } 

}
