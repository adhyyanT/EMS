import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  constructor(private employee: EmployeeService) { }

  ngOnInit() { //this makes sure the data is upto date
    this.employeeDetail= this.employee.getemployee()
  }
  employeeDetail = []
}
