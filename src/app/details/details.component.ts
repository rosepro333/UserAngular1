import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  profile=[];

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  ];

  constructor(private router:Router,private userService:UserService,private route:ActivatedRoute)
  {

              this.route.paramMap.subscribe((params:any)=>{
                 console.log(params)
                // //alert(params.params.id)
                 const userId=params.params.id;
                 console.log(userId)   
          
            
                  this.userService.getUserProfile(userId)
              
                  .subscribe((data:any)=>{
                   console.log(data.data)
                   this.profile=data.data;
                  
            
          
                  })

              })



   } 

  ngOnInit(): void {
  }


 
}
