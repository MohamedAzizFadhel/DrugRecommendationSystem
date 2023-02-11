import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapNonprogrammeActNonComponent } from '../dialog-aap-nonprogramme-act-non/dialog-aap-nonprogramme-act-non.component';
import { DialogAapNonprogrammeActOuiComponent } from '../dialog-aap-nonprogramme-act-oui/dialog-aap-nonprogramme-act-oui.component';

@Component({
  selector: 'app-dialog-aap-nonprogramme-act',
  templateUrl: './dialog-aap-nonprogramme-act.component.html',
  styleUrls: ['./dialog-aap-nonprogramme-act.component.css']
})
export class DialogAapNonprogrammeActComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapNonprogrammeActOuiComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapNonprogrammeActNonComponent)
  }

}
