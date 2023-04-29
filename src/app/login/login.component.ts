import { Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators,ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  faEnvelope=faEnvelope
  faLock=faLock
  faUser=faUser

  loginform=new FormGroup({
    "username":new FormControl("",[Validators.required]),
    "password":new FormControl("",[Validators.required]) 
  })
  get username(){
    return this.loginform.get("username")
  }
  get password(){
    return this.loginform.get("password")
  }

  constructor(private service:StoreService, private router:Router){}
  
  ngOnInit(): void {
    
  }

  handlelogin(){
    this.service.getToken(this.loginform.value).then(res=>res.json()).then(data=>{
      let tkn=data.token
      console.log(this.loginform.get("username")?.value);
      let user=this.loginform.get("username")
      if(tkn){
        localStorage.setItem("token","Token "+tkn)
        localStorage.setItem("username",`${this.loginform.get("username")?.value}`)
        this.router.navigateByUrl("products")
      }
    })
  }
  redirectregister(){
    this.router.navigateByUrl("register")
  }

}
