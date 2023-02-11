import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAodOraleRisqueEleveTypeDabiRisqueComponent } from '../dialog-aod-orale-risque-eleve-type-dabi-risque/dialog-aod-orale-risque-eleve-type-dabi-risque.component';

@Component({
  selector: 'app-dialog-aod-orale-risque-eleve-type-dabi',
  templateUrl: './dialog-aod-orale-risque-eleve-type-dabi.component.html',
  styleUrls: ['./dialog-aod-orale-risque-eleve-type-dabi.component.css']
})
export class DialogAodOraleRisqueEleveTypeDabiComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(DialogAodOraleRisqueEleveTypeDabiRisqueComponent);
  }

}
