import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit{

  productdetail:any

  constructor(private service:StoreService,private router:ActivatedRoute,private router1:Router){}

  ngOnInit(): void {
    let id=this.router.snapshot.params["id"]
    this.service.getProductDetail(id).then((res:any)=>res.json()).then((data)=>this.productdetail=data) 
  }

  addto_cart(id:any){
    this.service.addcart(id).then((res:any)=>res.json()).then(data=>data)
    this.router1.navigateByUrl("products")
  }
}
