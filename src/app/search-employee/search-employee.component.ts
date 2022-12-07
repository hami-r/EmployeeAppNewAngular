import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  constructor(private api:ApiService) {}
  employeeCode = ""
  searchData:any = []
  searchEmployee = () => {
    let data:any = {
      "employeeCode":this.employeeCode
    }
    console.log(data);
    this.api.searchEmployee(data).subscribe(
      (response:any) => {
        console.log(response);
        if(response.length == 0){
          alert("Not found")
        } else {
          this.searchData = response
        }
        
      }
    )
    
  }
}
