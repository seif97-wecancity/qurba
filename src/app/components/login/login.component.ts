import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService} from './../../shared/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
loginForm!:FormGroup;
button:boolean = false;
constructor(private _AuthService:AuthService, private _FormBuilder:FormBuilder,private _Router:Router){}

ngOnInit(): void {
this.initiate();
}
initiate(){
  this.loginForm = this._FormBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
}
onSubmit(){
  this.button = true;
  this._AuthService.signin(this.loginForm.value).subscribe((res : any) => {
    console.log(res);
    localStorage.setItem('Authorization' , res.token)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You are signed in now',
      showConfirmButton: false,
      timer: 1500
    });
    this._Router.navigate(['/orders']);
  },(err) => {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Enable to sign in',
      showConfirmButton: false,
      timer: 1500
    });
    this.button = false;
  },() => {
    console.log('completed');
  })
  
  
}
}
