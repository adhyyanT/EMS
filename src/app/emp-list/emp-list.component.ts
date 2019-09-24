import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private employee: EmployeeService) { }

  ngOnInit() {
    this.employeeDetail=this.employee.getemployee()
  }
  employeeDetail = [
    /*{id: 1, name: 'abc', dept:'cse'},
    {id: 2, name: 'def', dept:'me'},
    {id: 3, name: 'ghi', dept:'ece'}*/
  ]
}
