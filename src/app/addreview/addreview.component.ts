import { Component,OnInit,Input} from '@angular/core';
import {FormGroup,FormControl,Validators,ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit{

  @Input() proid:any=""

  reviewForm=new FormGroup({
    "rating":new FormControl("",[Validators.required]),
    "comment":new FormControl("",[Validators.required])
  })

  constructor(private service:StoreService,private router:Router){}

  ngOnInit(): void {}

  addreview(){
    this.service.addProductReview(this.reviewForm.value,this.proid).then((res:any)=>res.json()).then(data=>{
    this.router.navigateByUrl("products")
    })
    
  }

}
