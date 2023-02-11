import { Component, OnInit } from '@angular/core';
import { MatDateFormats } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapHemorragieIntraIndicationNonComponent } from '../dialog-aap-hemorragie-intra-indication-non/dialog-aap-hemorragie-intra-indication-non.component';
import { DialogAapHemorragieIntraIndicationOuiComponent } from '../dialog-aap-hemorragie-intra-indication-oui/dialog-aap-hemorragie-intra-indication-oui.component';

@Component({
  selector: 'app-dialog-aap-hemorragie-intra-indication',
  templateUrl: './dialog-aap-hemorragie-intra-indication.component.html',
  styleUrls: ['./dialog-aap-hemorragie-intra-indication.component.css']
})
export class DialogAapHemorragieIntraIndicationComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapHemorragieIntraIndicationOuiComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapHemorragieIntraIndicationNonComponent)
  }

}
