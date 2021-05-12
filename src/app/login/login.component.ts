import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm=this.fb.group({

    Contact_Email:["" ,[Validators.required]],
         password:["" ,[Validators.required]], 
  
  })


  constructor(private router:Router, private userService:UserService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

 login(){


        if(this.loginForm.valid==false)
        {
                  
          alert("form is invalid")
      
        }
        else{

    
                const Contact_Email=this.loginForm.value.Contact_Email;
                const password=this.loginForm.value.password;
                    
                 //  alert(Contact_Email);
                  // alert(password);
      
              //  const user = this.userService.authenticateUser(Contact_Email,password)
              //                      .subscribe((data:any)=>{

              //                         console.log(data);
              //                         //alert(data.msg);

              //                       localStorage.setItem("token",data.data);

                                   this.router.navigateByUrl("/home");
                      
              //                       },(err)=>{
              //                         alert(err.error.message);
              //                     })
                        
      
          }
 }
  


}
