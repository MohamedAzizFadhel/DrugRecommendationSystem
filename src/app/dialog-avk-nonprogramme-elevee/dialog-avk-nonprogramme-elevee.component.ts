import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkNonprogrammeEleveeResComponent } from '../dialog-avk-nonprogramme-elevee-res/dialog-avk-nonprogramme-elevee-res.component';

@Component({
  selector: 'app-dialog-avk-nonprogramme-elevee',
  templateUrl: './dialog-avk-nonprogramme-elevee.component.html',
  styleUrls: ['./dialog-avk-nonprogramme-elevee.component.css']
})
export class DialogAvkNonprogrammeEleveeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkNonprogrammeEleveeResComponent)
  }

}
