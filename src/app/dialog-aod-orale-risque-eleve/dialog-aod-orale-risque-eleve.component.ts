import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodOraleRisqueEleveTypeComponent } from '../dialog-aod-orale-risque-eleve-type/dialog-aod-orale-risque-eleve-type.component';

@Component({
  selector: 'app-dialog-aod-orale-risque-eleve',
  templateUrl: './dialog-aod-orale-risque-eleve.component.html',
  styleUrls: ['./dialog-aod-orale-risque-eleve.component.css']
})
export class DialogAodOraleRisqueEleveComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodOraleRisqueEleveTypeComponent);
  }

}
