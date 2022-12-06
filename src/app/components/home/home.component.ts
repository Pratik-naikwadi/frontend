import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories = [
    {image: "/assets/logo/ad.png",
     name: "cart",
     rating:"4.5",
     deliveryCharge :"40",
     price : "200"
   },
   {image: "/assets/logo/ad.png",
   name: "cart",
   rating:"4.5",
   deliveryCharge :"40",
   price : "200"
 },
 {image: "/assets/logo/ad.png",
 name: "cart",
 rating:"4.5",
 deliveryCharge :"40",
 price : "200"
},
  ];
  products = [
    {image: "/assets/logo/ad.png",
     name: "cart",
     rating:"4.5",
     deliveryCharge :"40",
     price : "200"
   },
   {image: "/assets/logo/ad.png",
   name: "cart",
   rating:"4.5",
   deliveryCharge :"40",
   price : "200"
 },
 {image: "/assets/logo/ad.png",
 name: "cart",
 rating:"4.5",
 deliveryCharge :"40",
 price : "200"
 },
 {image: "/assets/logo/ad.png",
 name: "cart",
 rating:"4.5",
 deliveryCharge :"40",
 price : "200"
 }]
 
}
