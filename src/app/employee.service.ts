/*whole added (created inside app)*/
import { Injectable } from '@angular/core';

@Injectable()


export class EmployeeService{
    employeeDetail = [
        {id: 1, name: 'abc', dept:'cse'},
        {id: 2, name: 'def', dept:'me'},
        {id: 3, name: 'ghi', dept:'ece'}
    ]
    getemployee(){
        return this.employeeDetail
    }
}