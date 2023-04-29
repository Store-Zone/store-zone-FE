import { Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators,ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  faEnvelope=faEnvelope
  faLock=faLock
  faUser=faUser

  registrationform=new FormGroup({
    "username":new FormControl("",[Validators.required]),
    "e_mail":new FormControl("",[Validators.required]),
    "password":new FormControl("",[Validators.required])
  })

  get username(){
    return this.registrationform.get("username")
  }
  get e_mail(){
    return this.registrationform.get("e-mail")
  }
  get password(){
    return this.registrationform.get("password")
  }

  constructor(private service:StoreService,private router:Router){}

  ngOnInit(): void {
    
  }
  registeruser(){
    this.service.createuser(this.registrationform.value).then(res=>res.json()).then(data=>data)
    this.router.navigateByUrl("")
  }
}
