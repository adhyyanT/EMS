import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private emp: EmployeeService){}


  title = 'EMS';
  emp_id
  emp_name
  emp_dept
  
  addEmployee(){

    /*this.myemployee.id=this.emp_id,
    this.myemployee.name=this.emp_name,
    this.myemployee.dept=this.emp_dept*/
    const myemployee= {
      id:this.emp_id,
      name: this.emp_name,
      dept: this.emp_dept
    }
    this.emp.setEmployee(myemployee)
  }
}