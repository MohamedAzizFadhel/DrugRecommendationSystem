import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodEndoRisqueEleveTypeComponent } from '../dialog-aod-endo-risque-eleve-type/dialog-aod-endo-risque-eleve-type.component';

@Component({
  selector: 'app-dialog-aod-endo-risque-eleve',
  templateUrl: './dialog-aod-endo-risque-eleve.component.html',
  styleUrls: ['./dialog-aod-endo-risque-eleve.component.css']
})
export class DialogAodEndoRisqueEleveComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodEndoRisqueEleveTypeComponent);
  }

}
