import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkNonprogrammeEleveeComponent } from '../dialog-avk-nonprogramme-elevee/dialog-avk-nonprogramme-elevee.component';
import { DialogAvkNonprogrammeFaibleResComponent } from '../dialog-avk-nonprogramme-faible-res/dialog-avk-nonprogramme-faible-res.component';

@Component({
  selector: 'app-dialog-avk-nonprogramme-faible',
  templateUrl: './dialog-avk-nonprogramme-faible.component.html',
  styleUrls: ['./dialog-avk-nonprogramme-faible.component.css']
})
export class DialogAvkNonprogrammeFaibleComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkNonprogrammeFaibleResComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAvkNonprogrammeEleveeComponent)
  }

}
