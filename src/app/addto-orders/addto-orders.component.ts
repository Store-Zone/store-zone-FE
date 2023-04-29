import { Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators,ReactiveFormsModule} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import {faIndianRupee} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-addto-orders',
  templateUrl: './addto-orders.component.html',
  styleUrls: ['./addto-orders.component.css']
})
export class AddtoOrdersComponent implements OnInit{

  faIndianRupee=faIndianRupee
  productdetail:any

  neworderForm=new FormGroup({
    "name":new FormControl("",[Validators.required]),
    "mobile":new FormControl("",[Validators.required]), 
    "address":new FormControl("",[Validators.required]), 
    "landmark":new FormControl("",[Validators.required]), 
    "city":new FormControl("",[Validators.required]), 
    "state":new FormControl("",[Validators.required]), 
    "pin":new FormControl("",[Validators.required]), 
    "payment":new FormControl("",[Validators.required])
  })
 
  constructor(private router:Router,private service:StoreService,private router1:ActivatedRoute){}

  ngOnInit(): void {
    let id=this.router1.snapshot.params["id"]
    this.service.getProductDetail(id).then((res:any)=>res.json()).then((data)=>this.productdetail=data)  
  }

  
  neworder(){
    let id=this.router1.snapshot.params["id"]
    this.service.addorder(this.neworderForm.value,id).then((res:any)=>res.json()).then(data=>{
    this.router.navigateByUrl("orders")  
    })
    // this.router.navigateByUrl("orders")
  }
  

  // redirectaddress(){
  //   this.router.navigateByUrl("address")
  // }
  // orderplaced(){
  //   this.router.navigateByUrl("orders")
  // }

}
