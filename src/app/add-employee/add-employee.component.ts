import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employeeCode = ""
  name = ""
  designation = ""
  salary = ""
  companyName = ""
  mobileNo = ""
  username = ""
  password = ""

  readValues = () => {
    
  }
}
