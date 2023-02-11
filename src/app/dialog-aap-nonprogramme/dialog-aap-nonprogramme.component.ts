import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapNonprogrammeActComponent } from '../dialog-aap-nonprogramme-act/dialog-aap-nonprogramme-act.component';

@Component({
  selector: 'app-dialog-aap-nonprogramme',
  templateUrl: './dialog-aap-nonprogramme.component.html',
  styleUrls: ['./dialog-aap-nonprogramme.component.css']
})
export class DialogAapNonprogrammeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapNonprogrammeActComponent)
  }

}
