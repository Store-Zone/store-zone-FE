import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit{

  products:any
  constructor(private router:Router,private service:StoreService){}

  ngOnInit(): void {
    this.service.getproductsbycategory('Fashion').then((res:any)=>res.json()).then((data:any)=>this.products=data)
  }

  redirectProductdetail(id:any){
    this.router.navigate(["products/",id])
  }

}
