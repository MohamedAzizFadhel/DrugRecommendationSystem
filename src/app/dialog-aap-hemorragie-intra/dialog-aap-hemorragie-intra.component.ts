import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapHemorragieIntraIndicationComponent } from '../dialog-aap-hemorragie-intra-indication/dialog-aap-hemorragie-intra-indication.component';

@Component({
  selector: 'app-dialog-aap-hemorragie-intra',
  templateUrl: './dialog-aap-hemorragie-intra.component.html',
  styleUrls: ['./dialog-aap-hemorragie-intra.component.css']
})
export class DialogAapHemorragieIntraComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapHemorragieIntraIndicationComponent)
  }

}
