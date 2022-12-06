import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';
import { SignUp } from 'src/app/data-type';
// import { SellerService } from 'src/app/services/seller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private seller:SellerService,private router:Router) { }

  ngOnInit(): void {
  }

  signUp(data:SignUp):void{
    this.seller.userSignUp(data).subscribe((result)=>{
      if(result){
        this.router.navigate(['seller-home'])
      }
    })
  }
}
