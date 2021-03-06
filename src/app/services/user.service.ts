import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const apiUrl1="https://verify.flexm.com/api/token/authenticate";
const apiUrl2="https://verify.flexm.com/api/scans/scanDocByTenent";
const apiUrl3="https://verify.flexm.com/api/scans/allScanByDocumentId/";
   

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor (private http:HttpClient){ }

       authenticateUser=(Contact_Email:string,password:string)=>{
                     
         //httprequest

                 return this.http.post(apiUrl1,{
                   
                     "Contact_Email":Contact_Email,
                      "password":password
                 
                        
                 });


         }


// ................................header.............................
          generateHeader=()=>{
            let token=localStorage.getItem("token");
          
            let headers=new HttpHeaders();
          //  headers=headers.set("Authorization","Bearer "+token)
              headers=headers.set("access-token",token)

            // console.log(headers);
              return headers;

   
         }


  //...................user listing....................................
  
   //users listing
 //users listing
//  getUsers(){
//   return this.http.get(apiUrl+"users",{
//       headers:this.generateHeader()

//    });

// }

//.....................date range listing............JUST POST MESSAGE.....IN HOME PAGE.........

daterangeUser=(fromDate1:any,toDate1:any)=>{

            return this.http.post( apiUrl2,{
                          
              "Tenant_ID":"",
              "limit":"10",
              "pageNo":"1",
              "order":"-1",
              "search":"",
              "fieldName":"",
              "startDate":fromDate1,
              "endDate":toDate1,
              "status":""
                      

            },{
              //setting headers
              headers:this.generateHeader()

              
            });


}



  // ..........details..........POST MESSAGE IN HOME2 PAGE ...USER LISTING IN..DATE RANGE.....................    

        Details=()=>{
      
          return this.http.post( apiUrl2,{
                
            "Tenant_ID":"",
            "limit":"10",
            "pageNo":"1",
            "order":"-1",
            "search":"",
            "fieldName":"",
            "startDate":"2021-02-12T18:30:00.000Z",
            "endDate":"2021-02-24T18:30:00.000Z",
            "status":""
                    
 
          },{
             //setting headers
             headers:this.generateHeader()

            
          });

        }
  //.....................MOVE TO DETAILS PAGE............GET ..................
 
 getUserProfile=(userId:any)=>{

  return this.http.get(apiUrl3+userId,
          {
          //setting headers
          headers:this.generateHeader()
         }
   
       );


}      




}
