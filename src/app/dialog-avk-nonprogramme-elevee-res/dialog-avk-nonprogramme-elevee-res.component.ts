import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkNonprogrammeEleveeResSemiurgentComponent } from '../dialog-avk-nonprogramme-elevee-res-semiurgent/dialog-avk-nonprogramme-elevee-res-semiurgent.component';
import { DialogAvkNonprogrammeEleveeResUrgentComponent } from '../dialog-avk-nonprogramme-elevee-res-urgent/dialog-avk-nonprogramme-elevee-res-urgent.component';

@Component({
  selector: 'app-dialog-avk-nonprogramme-elevee-res',
  templateUrl: './dialog-avk-nonprogramme-elevee-res.component.html',
  styleUrls: ['./dialog-avk-nonprogramme-elevee-res.component.css']
})
export class DialogAvkNonprogrammeEleveeResComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAvkNonprogrammeEleveeResUrgentComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAvkNonprogrammeEleveeResSemiurgentComponent)
  }

}
