import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private api:ApiService) {}
  employeeCode = ""
  name = ""
  designation = ""
  salary = ""
  companyName = ""
  mobileNo = ""
  username = ""
  password = ""

  readValues = () => {
    let employee:any = {
      "employeeCode":this.employeeCode,
      "name":this.name,
      "designation":this.designation,
      "salary":this.salary,
      "companyName":this.companyName,
      "mobileNo":this.mobileNo,
      "username":this.username,
      "password":this.password
    }
    console.log(employee);
    this.api.addEmployee(employee).subscribe(
      (response:any) => {
        if(response.status=="success"){
          alert("added successfully")
          this.employeeCode = ""
          this.name = ""
          this.designation = ""
          this.salary = ""
          this.companyName = ""
          this.mobileNo = ""
          this.username = ""
          this.password = ""
        } else {
          alert("something is wrong")
        }
      }
    )
  }
}
