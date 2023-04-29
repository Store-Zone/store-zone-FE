import { Component,OnInit,Input,SimpleChanges,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  faCircleUser=faCircleUser


  getusername(){
    return localStorage.getItem("username") 
  }
  user=this.getusername()

  cartcount:any
  
  constructor(private router:Router,private service:StoreService){}

  ngOnInit(): void {
    this.service.usercartcount().then((res:any)=>res.json()).then((data:any)=>this.cartcount=data)
  }

  

  redirectelectronics(){
    this.router.navigateByUrl("products/categories/electronics")
  }
  redirectfashion(){
    this.router.navigateByUrl("products/categories/fashion")
  }
  redirectgrooming(){
    this.router.navigateByUrl("products/categories/grooming")
  }

  redirectproductlist(){
    this.router.navigateByUrl("products")
  }

  redirectlogin(){
    localStorage.clear()
    this.router.navigateByUrl("")
  }
  redirectcart(){
    console.log("cart");
    this.router.navigateByUrl("carts")
  }

  redirectabout(){
    this.router.navigateByUrl("about")
  }
  redirectorders(){
    this.router.navigateByUrl("orders")
  }
}
