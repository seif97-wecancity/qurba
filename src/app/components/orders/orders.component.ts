import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../shared/products.service'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
products:any = [];
selectedproducts : number = 0;
title = 'pagination';
POSTS: any ;
page : number = 1;
count : number = 0 ;
tableSize: number = 6;
searchWords: string = '';
  constructor(private _ProductsService:ProductsService){}


  ngOnInit() : void{
  this.getproducts();

  }
  //this is for the pagination
  onTableDataChange(event : any){
this.page = event;
this.getproducts();
  }
  onTableSizeChange(event : any): void{
this.tableSize = event.target.value;
this.page = 1;
this.getproducts();
  }
// adding products to the cart
  addproduct(){
    this.selectedproducts = this.selectedproducts + 1;
    this._ProductsService.Data.next(this.selectedproducts);
  }
//getting the products from the api
  getproducts(){
 this._ProductsService.getproducts().subscribe((res) => {
   this.products = res.products;
   
   for (let product of this.products) {
    let xx = product.description.slice(0, 60);
    product.description = xx;
   }
   
 })
  }
// this function filters the products
  searchMethod(word : string) {
    this.products = this.products.filter((element: { brand: string | string[]; title: string | string[]; }) =>
       element.brand.includes(word) || element.title.includes(word) );
      //  console.log(word);   

  }
  
 
}




