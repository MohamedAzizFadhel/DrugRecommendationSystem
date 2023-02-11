import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-avk-hemmoragie',
  templateUrl: './dialog-avk-hemmoragie.component.html',
  styleUrls: ['./dialog-avk-hemmoragie.component.css']
})
export class DialogAvkHemmoragieComponent implements OnInit {

  
  constructor(private dialogRef: MatDialogRef<DialogAvkHemmoragieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
     
      this.dialogRef.afterClosed().subscribe(result => {
        console.log(data.value);
    });
    
 }



  ngOnInit(): void {
  }
  
}
