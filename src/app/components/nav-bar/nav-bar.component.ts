import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/products.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {
  switch:boolean = true;
  count:number = 0;
  constructor(private _Router:Router, private _ProductsService:ProductsService){ }


  ngOnInit(): void {
    const str = window.location.href;
const seif = str.split(/[\s/]+/)
const last = seif[seif.length - 1]
if( last == 'orders'){
this.switch = false
}  
// to set the count in the market car
this._ProductsService.Data.subscribe((res) => {
  this.count = res;
})
  }

  itemsNav = [
    {
      nameItem : 'ClickTik',
      img : '01.png'
    },
    {
      nameItem : 'Home',
      img : null
    }
  ]
// this function to signout
  signout(){
    localStorage.removeItem('Authorization');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Signed out ',
      showConfirmButton: false,
      timer: 1500
    });
    this._Router.navigateByUrl('/');
  }

  ngOnDestroy() {
    this.switch = true
  }
}
