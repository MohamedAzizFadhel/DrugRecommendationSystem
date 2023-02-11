import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvkHemmoragieComponent } from '../dialog-avk-hemmoragie/dialog-avk-hemmoragie.component';
import { DialogAvkNonprogrammeComponent } from '../dialog-avk-nonprogramme/dialog-avk-nonprogramme.component';
import { DialogAvkProgrammeOraleComponent } from '../dialog-avk-programme-orale/dialog-avk-programme-orale.component';
import { DialogAvkProgrammeRisqueEndoComponent } from '../dialog-avk-programme-risque-endo/dialog-avk-programme-risque-endo.component';
import { DialogAvkProgrammeComponent } from '../dialog-avk-programme/dialog-avk-programme.component';

@Component({
  selector: 'app-dialog-avk',
  templateUrl: './dialog-avk.component.html',
  styleUrls: ['./dialog-avk.component.css']
})
export class DialogAVKComponent implements OnInit {
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogAvkProgrammeComponent);
  } 
  openDialog2(){
    this.dialog.open(DialogAvkProgrammeRisqueEndoComponent);
  }
  openDialog3(){
    this.dialog.open(DialogAvkProgrammeOraleComponent);
  }
  openDialog4(){
    this.dialog.open(DialogAvkNonprogrammeComponent)
  }
    
  openDialog5(){
    //this.dialog.open(DialogAvkHemmoragieComponent)
    const dialogRef = this.dialog.open(DialogAvkHemmoragieComponent, {
      data: {value: 'CCP: 0,5-1 ml/kg pour viser INR < 1,5 (1,2 en neurologie) ET Vit K 5-10 mg ivl'}
    });
    

  /*this.dialogRef.afterClosed().subscribe(result => {this.dialogRef.close(result);})
  console.log(this.result);*/
  
};
  }

