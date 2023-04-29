import { Component,OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {

  reviews:any
  @Input() pid:any=""

  constructor(private service:StoreService,private router:ActivatedRoute){}

  ngOnInit(): void {
    if(this.pid){
      this.service.getProductReviews(this.pid).then((res:any)=>res.json()).then((data:any)=>this.reviews=data)
    }
  }

  
  times(n: number): any[] {
    return Array(n);
  }
}
