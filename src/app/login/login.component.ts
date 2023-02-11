import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AnimationDriver } from '@angular/animations/browser';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //constructor() { }
  constructor(private router:Router,
    private formBuilder: FormBuilder) {}
    ;

  ngOnInit() {
    
  }


  public username :string | undefined;
  public pass: String | undefined;
  login() {
   if (this.username==="admin" && this.pass==="admin"){
    this.router.navigate(['dashbord']);
   }
 }
  /*gotoPage(pagename:string):void{
   //if (username="admin") and 
    this.router.navigate(['$(pagename)']);
  }*/
  /*getValue(val:string){

    console.warn(val);
  }*/
}


