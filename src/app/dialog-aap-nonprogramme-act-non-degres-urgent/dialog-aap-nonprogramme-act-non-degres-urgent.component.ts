import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAapNonprogrammeActNonDegresUrgentNeuroComponent } from '../dialog-aap-nonprogramme-act-non-degres-urgent-neuro/dialog-aap-nonprogramme-act-non-degres-urgent-neuro.component';
import { DialogAapNonprogrammeActNonDegresUrgentNonneuroComponent } from '../dialog-aap-nonprogramme-act-non-degres-urgent-nonneuro/dialog-aap-nonprogramme-act-non-degres-urgent-nonneuro.component';

@Component({
  selector: 'app-dialog-aap-nonprogramme-act-non-degres-urgent',
  templateUrl: './dialog-aap-nonprogramme-act-non-degres-urgent.component.html',
  styleUrls: ['./dialog-aap-nonprogramme-act-non-degres-urgent.component.css']
})
export class DialogAapNonprogrammeActNonDegresUrgentComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAapNonprogrammeActNonDegresUrgentNeuroComponent)
  }
  openDialog2(){
    this.dialog.open(DialogAapNonprogrammeActNonDegresUrgentNonneuroComponent)
  }

}
