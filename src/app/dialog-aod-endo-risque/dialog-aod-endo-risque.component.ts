import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodEndoRisqueEleveComponent } from '../dialog-aod-endo-risque-eleve/dialog-aod-endo-risque-eleve.component';
import { DialogAodEndoRisqueFaibleComponent } from '../dialog-aod-endo-risque-faible/dialog-aod-endo-risque-faible.component';

@Component({
  selector: 'app-dialog-aod-endo-risque',
  templateUrl: './dialog-aod-endo-risque.component.html',
  styleUrls: ['./dialog-aod-endo-risque.component.css']
})
export class DialogAodEndoRisqueComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodEndoRisqueFaibleComponent);
  }
  openDialog2() {
    this.dialog.open(DialogAodEndoRisqueEleveComponent);
  }

}
