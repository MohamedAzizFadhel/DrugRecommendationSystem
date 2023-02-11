import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodOraleRisqueCritiqueComponent } from '../dialog-aod-orale-risque-critique/dialog-aod-orale-risque-critique.component';
import { DialogAodOraleRisqueEleveComponent } from '../dialog-aod-orale-risque-eleve/dialog-aod-orale-risque-eleve.component';
import { DialogAodOraleRisqueFaibleComponent } from '../dialog-aod-orale-risque-faible/dialog-aod-orale-risque-faible.component';

@Component({
  selector: 'app-dialog-aod-orale-risque',
  templateUrl: './dialog-aod-orale-risque.component.html',
  styleUrls: ['./dialog-aod-orale-risque.component.css']
})
export class DialogAodOraleRisqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodOraleRisqueFaibleComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodOraleRisqueEleveComponent);
  }
  openDialog3() {
    this.dialog.open(DialogAodOraleRisqueCritiqueComponent);
  }

}
