import { Component,OnInit,ViewChild,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import {faIndianRupee} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit{

  faIndianRupee=faIndianRupee
  carts:any
  totalprice:any
  
  constructor(private service:StoreService,private router:Router){}
  
  
  ngOnInit(): void {
    this.service.usercarts().then((res:any)=>res.json()).then((data:any)=>this.carts=data)
    this.service.carttotal().then((res:any)=>res.json()).then((data:any)=>this.totalprice=data)
  }
  
  add_order(id:any){
    // this.router.navigateByUrl("orders")
    this.router.navigate(["addorder/",id])
  }

  removecart(id:any){
    this.service.cartdelete(id).then((res:any)=>res.json()).then(data=>data)
    this.router.navigateByUrl("products")
  }

 

  
}
