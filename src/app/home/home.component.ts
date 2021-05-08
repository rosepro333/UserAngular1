import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

export interface UserDetails {
  documentid: string;
  createdon: string;
  name:string;
  status:"";

}


const ELEMENT_DATA: UserDetails[] = [

  {documentid:"f8ea556d-acf9-4c70-a38a-b3a577  ",createdon:"10/01/2020",name:"Abilash",status:""},
  {documentid:"f8ea556d-acf9-4c70-a38a-b3a577  ",createdon:"10/01/2020",name:"Saran",status:""},
  {documentid:"f8ea556d-acf9-4c70-a38a-b3a577  ",createdon:"10/01/2020",name:"Saran",status:""},
  {documentid:"f8ea556d-acf9-4c70-a38a-b3a577  ",createdon:"10/01/2020",name:"Saran",status:""},
  {documentid:"f8ea556d-acf9-4c70-a38a-b3a577  ",createdon:"10/01/2020",name:"Saran",status:""},
  {documentid:"f8ea556d-acf9-4c70-a38a-b3a577  ",createdon:"10/01/2020",name:"Saran",status:""},
  {documentid:"f8ea556d-acf9-4c70-a38a-b3a577  ",createdon:"10/01/2020",name:"Saran",status:""},
  

];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['documentid', 'createdon', 'name','status'];
  dataSource = ELEMENT_DATA;
         

  constructor(private userService:UserService) {

    
   }

  ngOnInit(): void {
  }

  Details(){


     this.userService.Details()
    .subscribe((data:any)=>{

    // alert(data.message);
     console.log(data);
     alert(data.msg);
   

     })
  }


}
