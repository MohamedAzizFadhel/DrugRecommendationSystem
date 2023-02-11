import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapHemorragieChocComponent } from '../dialog-aap-hemorragie-choc/dialog-aap-hemorragie-choc.component';
import { DialogAapHemorragieGraveComponent } from '../dialog-aap-hemorragie-grave/dialog-aap-hemorragie-grave.component';
import { DialogAapHemorragieIntraComponent } from '../dialog-aap-hemorragie-intra/dialog-aap-hemorragie-intra.component';
import { DialogAapHemorragieNongraveComponent } from '../dialog-aap-hemorragie-nongrave/dialog-aap-hemorragie-nongrave.component';

@Component({
  selector: 'app-dialog-aap-hemorragie',
  templateUrl: './dialog-aap-hemorragie.component.html',
  styleUrls: ['./dialog-aap-hemorragie.component.css']
})
export class DialogAapHemorragieComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapHemorragieIntraComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapHemorragieChocComponent)
  }
  openDialog3(){
    this.dialog.open(DialogAapHemorragieGraveComponent)
  }
  openDialog4(){
    this.dialog.open(DialogAapHemorragieNongraveComponent)
  }

  


}
