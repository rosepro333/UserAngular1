import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


const apiUrl3="https://verify.flexm.com/api/scans/allScanByDocumentId/";

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit { 

  // users:{data:any}[]=[]
  // users:{ data:[any]; }[]=[];


users=[];


    filterForm= new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl()
    });

get fromDate() { return this.filterForm.get('fromDate'); }
get toDate() { return this.filterForm.get('toDate'); }


  constructor(private userService:UserService,private router:Router) { 

 //................'...............users listing................................
    // userService.getUsers()
    // .subscribe((data:any)=>{
    //   //console.log(data)
    //    this.users=data;
     
    // });


  }

  ngOnInit(): void {
  }


    //................'...............users listing.....respect to date picker...........................

   getDateRange() {

    const fromDate = this.filterForm.value.fromDate;
    const toDate = this.filterForm.value.toDate;

    const event1 = new Date(fromDate);//to iso string
    const event2 = new Date(toDate);//to iso string
    
    const fromDate1=event1.toISOString();
    const toDate1=event2.toISOString();

    //alert(fromDate1);
    // alert(toDate1);
      
  
    const user = this.userService.daterangeUser(fromDate1,toDate1)
                  .subscribe((data:any)=>{

                             //console.log(data);
                             // alert(data.msg);
                                this.users=data.data;

                               //console.log(this.users);
                              
                               const  USER1 =data;
                               console.log(USER1);

                               for (var val of USER1.data) {

                                // console.log(val.createdAt);
                                // console.log(val.Document_ID._id);
                                // console.log(val.Document_ID.First_Name);
                               
                              }
                     
                              //  console.log(data.data[0].createdAt);
                              //  console.log(data.data[0].Document_ID._id);
                              //  console.log(data.data[0].Document_ID. First_Name);

                             
                        
                            }
                         )
   }


  userdetails(item:any)
  {

     this.router.navigate(["details",item.Document_ID._id])

  }



 
}
