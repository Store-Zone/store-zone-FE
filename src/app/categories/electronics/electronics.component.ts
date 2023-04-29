import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit{

  products:any
  constructor(private router:Router,private service:StoreService){}

  ngOnInit(): void {
    this.service.getproductsbycategory('Electronics').then((res:any)=>res.json()).then((data:any)=>this.products=data)
  }
  
  redirectProductdetail(id:any){
    this.router.navigate(["products/",id])
  }
}
