import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() image!:string;
  @Input() productName!:string;
  @Input() rating!:string;
  @Input() price!:string; 
  @Input() deliveryCharge!:string;
  

}
