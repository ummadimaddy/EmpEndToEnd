import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
  public emps = [];

  constructor(private employeService: EmployeService, private route: Router) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeService.listEmployees().subscribe(response => {
      if (response.status === 200) {
        this.emps = response.data;
        console.log(response);
  
      }
    });
  }

  edit(data) {
    this.employeService.putData(data);
    this.route.navigate(['/PostEmploye']);
  }

  delete(data) {
    this.employeService.removeEmploye(data._id).subscribe(response => {
      if (response.status === 200) {
        alert(response.message);
        this.getEmployees();
      } else {
        alert(response.message);
      }
    });
  }
}
