import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-aod-endo-risque-faible',
  templateUrl: './dialog-aod-endo-risque-faible.component.html',
  styleUrls: ['./dialog-aod-endo-risque-faible.component.css']
})
export class DialogAodEndoRisqueFaibleComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }


}
