import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeService } from './employee.service'; //this added
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers:/*this added*/ [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
