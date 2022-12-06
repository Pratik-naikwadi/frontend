import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
    @Input() image!:string;
    @Input() productName!:string;
    @Input() rating!:string;
    @Input() price!:string; 
    @Input() deliveryCharge!:string;
}
