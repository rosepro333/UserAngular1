import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import {FormControl, FormGroup} from '@angular/forms';
import { DatePipe } from '@angular/common';


 export interface UserDetails {
   documentid: string;
   createdon:Date;
   name:string;
   status:"";

 }


const ELEMENT_DATA: UserDetails[] = [

   {documentid:"f8ea556d-acf9-4c70-a38a-b3a577  ",createdon:new Date(2016, 11, 24),name:"Abilash",status:""},
   {documentid:"f8ea556d-acf9-4c70-a38a-b3a577  ",createdon:new Date(2018, 18, 24),name:"rose",status:""},
   {documentid:"f8ea556d-acf9-4c70-a38a-b3a577  ",createdon:new Date(2021, 6, 12),name:"mary",status:""},
   {documentid:"f8ea556d-acf9-4c70-a38a-b3a577  ",createdon:new Date(2001, 7, 6),name:"antony",status:""},
   {documentid:"f8ea556d-acf9-4c70-a38a-b3a577  ",createdon:new Date(2020, 5, 9),name:"mini",status:""},
  //  {documentid:"f8ea556d-acf9-4c70-a38a-b3a577  ",createdon:new Date(2008, 7, 14),name:"lidiya",status:""},
  //  {documentid:"f8ea556d-acf9-4c70-a38a-b3a577  ",createdon:new Date(2020, 4, 29),name:"isaq",status:""},
  

 ];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

   displayedColumns: string[] = ['documentid', 'createdon', 'name','status'];
   dataSource = ELEMENT_DATA;

    pipe: DatePipe;

 filterForm= new FormGroup({
       fromDate: new FormControl(),
       toDate: new FormControl()
 });

 get fromDate() { return this.filterForm.get('fromDate'); }
 get toDate() { return this.filterForm.get('toDate'); }
   

  constructor(private userService:UserService) {

   }

   ngOnInit(): void {
   }

  // ----------------------\\\---------DOB: new Date(2040, 5, 30)-----------------

   getDateRange() {
      // getting date from calendar
      const fromDate = this.filterForm.value.fromDate
      const toDate = this.filterForm.value.toDate
      const tempData = this.dataSource;
      let selectedItems: UserDetails[] = [];
     if(fromDate !== '' && toDate !== '') {
              tempData.forEach((item, index) => {
             if (item.createdon >= fromDate && item.createdon <= toDate) {
                 selectedItems.push(item);
              }
          });

         this.dataSource = selectedItems;
      }
    }

    // applyFilter(filterValue: string) {
    //   this.dataSource.filter = filterValue.trim().toLowerCase();
    // }

 
   Details(){


     this.userService.Details()
    .subscribe((data:any)=>{

     // alert(data.message);
      console.log(data);
      alert(data.msg);
   

      })
  }


}
