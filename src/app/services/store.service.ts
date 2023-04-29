import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {}

  createuser(data:any){
    return fetch("http://127.0.0.1:8000/register/",{
      "method":"POST",
      "body":JSON.stringify(data),
      "headers":{
        "content-type":"application/json;charset=UTF-8"
      }
    })
  }

  getToken(data:any){
    return fetch("http://127.0.0.1:8000/token/",{
      "method":"POST",
      "body":JSON.stringify(data),
      "headers":{
        "content-type":"application/json;charset=UTF-8"
      }      
    })
  }

  getAuthToken(){
    return localStorage.getItem("token") 
  }

  getAllProducts(){
    let tkn=this.getAuthToken()
    if(tkn){
      return fetch("http://127.0.0.1:8000/products/",{
        "method":"GET",
        "headers":{
          "content-type":"application/json;charset=UTF-8",
          "Authorization":tkn
        }
      })
    }
    else{
      return new Promise((res,rej)=>rej("error"))
    }
  } 

  getProductDetail(id:any){
    let tkn=this.getAuthToken()
    if(tkn){
      return fetch(`http://127.0.0.1:8000/products/${id}/`,{
        "method":"GET",
        "headers":{
          "content-type":"application/json;charset=UTF-8",
          "Authorization":tkn
        }
      })
    }
    else{
      return new Promise((res,rej)=>rej("failed to fetch data"))
    }
  }

  getproductsbycategory(category:string){
    let tkn=this.getAuthToken()
    if(tkn){
      return fetch(`http://127.0.0.1:8000/products/?category=${category}`,{
        "method":"GET",
        "headers":{
          "content-type":"application/json;charset=UTF-8",
          "Authorization":tkn
        }
      })
    }
    else{
      return new Promise((res,rej)=>rej("error"))
    }
  }

  getProductReviews(id:number){
    let tkn=this.getAuthToken()
    if(tkn){
      return fetch(`http://127.0.0.1:8000/products/${id}/get_review/`,{
        "method":"GET",
        "headers":{
          "content-type":"application/json;charset=UTF-8",
          "Authorization":tkn
        }
      })
    }
    else{
      return new Promise((res,rej)=>rej("failed to fetch data"))
    }
  }

  addProductReview(data:any,id:any){
    let tkn=this.getAuthToken()
    if(tkn){
      return fetch(`http://127.0.0.1:8000/products/${id}/add_review/`,{
        "method":"POST",
        "body":JSON.stringify(data),
        "headers":{
          "content-type":"application/json;charset=UTF-8",
          "Authorization":tkn
        }
      })
    }
    else{
      return new Promise((res,rej)=>rej("error"))
    }
  }

  usercarts(){
    let tkn=this.getAuthToken()
    if(tkn){
      return fetch("http://127.0.0.1:8000/carts/",{
        "method":"GET",
        "headers":{
          "content-type":"application/json;charset=UTF-8",
          "Authorization":tkn
        }
      })
    }
    else{
      return new Promise((res,rej)=>rej("error"))
    }
  }

  addcart(id:any){
    let tkn=this.getAuthToken()
    if(tkn){
      return fetch(`http://127.0.0.1:8000/products/${id}/addto_cart/`,{
        "method":"POST",
        "headers":{
          "content-type":"application/json;charset=UTF-8",
          "Authorization":tkn
        }
      })
    }
    else{
      return new Promise((res,rej)=>rej("error"))
    }
  }

  usercartcount(){
    let tkn=this.getAuthToken()
    if(tkn){
      return fetch("http://127.0.0.1:8000/carts/get_usercartcount/",{
        "method":"GET",
        "headers":{
          "content-type":"application/json;charset=UTF-8",
          "Authorization":tkn
        }
      })
    }
    else{
      return new Promise((res,rej)=>rej("error"))
    }
  }

  cartdelete(id:any){
    let tkn=this.getAuthToken()
    if(tkn){
      return fetch(`http://127.0.0.1:8000/carts/${id}/`,{
        "method":"DELETE",
        "headers":{
          "content-type":"application/json;charset=UTF-8",
          "Authorization":tkn
        }
      })
    }
    else{
      return new Promise((res,rej)=>rej("error"))
    }
  }

  carttotal(){
    let tkn=this.getAuthToken()
    if(tkn){
      return fetch("http://127.0.0.1:8000/carts/pricecount/",{
        "method":"GET",
        "headers":{
          "content-type":"application/json;charset=UTF-8",
          "Authorization":tkn
        }
      })
    }
    else{
      return new Promise((res,rej)=>rej("error"))
    }
  }

  getorders(){
    let tkn=this.getAuthToken()
    if(tkn){
      return fetch("http://127.0.0.1:8000/orders/",{
        "method":"GET",
        "headers":{
          "content-type":"application/json;charset=UTF-8",
          "Authorization":tkn
        }
      })
    }
    else{
      return new Promise((res,rej)=>rej("error"))
    }
  }

  addorder(data:any,id:number){
    let tkn=this.getAuthToken()
    if(tkn){
      return fetch(`http://127.0.0.1:8000/products/${id}/addto_order/`,{
        "method":"POST",
        "body":JSON.stringify(data),
        "headers":{
          "content-type":"application/json;charset=UTF-8",
          "Authorization":tkn
        }
      })
    }
    else{
      return new Promise((res,rej)=>rej("error"))
    }
  }
  
}
