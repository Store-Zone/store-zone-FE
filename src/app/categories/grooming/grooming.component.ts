import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-grooming',
  templateUrl: './grooming.component.html',
  styleUrls: ['./grooming.component.css']
})
export class GroomingComponent implements OnInit{

  products:any
  constructor(private service:StoreService,private router:Router){}

  ngOnInit(): void {
    this.service.getproductsbycategory('Grooming').then((res:any)=>res.json()).then((data:any)=>this.products=data)
  }
  
  redirectProductdetail(id:any){
    this.router.navigate(["products/",id])
  }

}
