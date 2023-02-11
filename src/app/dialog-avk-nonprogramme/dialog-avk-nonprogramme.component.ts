import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkNonprogrammeFaibleComponent } from '../dialog-avk-nonprogramme-faible/dialog-avk-nonprogramme-faible.component';

@Component({
  selector: 'app-dialog-avk-nonprogramme',
  templateUrl: './dialog-avk-nonprogramme.component.html',
  styleUrls: ['./dialog-avk-nonprogramme.component.css']
})
export class DialogAvkNonprogrammeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkNonprogrammeFaibleComponent)
  }

}
