import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // range = new FormGroup({
  //   start: new FormControl(),
  //   end: new FormControl()
  // });
  
  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

}


// @Component({
//   selector: 'date-range-picker-forms-example',
//   templateUrl: 'date-range-picker-forms-example.html',
// })
// export class DateRangePickerFormsExample {
//   range = new FormGroup({
//     start: new FormControl(),
//     end: new FormControl()
//   });
// }



