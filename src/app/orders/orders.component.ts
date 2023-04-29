import { Component,OnInit} from '@angular/core';
import { StoreService } from '../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  orders:any
  constructor(private service:StoreService,private router:Router){}

  ngOnInit(): void {
    this.service.getorders().then((res:any)=>res.json()).then((data:any)=>this.orders=data)
  }

}
