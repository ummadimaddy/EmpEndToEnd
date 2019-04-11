import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeService } from '../employe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  CreateEmploye = new FormGroup({
    empName: new FormControl(),
    empID: new FormControl(),
    empDomain: new FormControl(),
    empSalary: new FormControl(),
    empMobile: new FormControl(),
    empType: new FormControl()
  });

  constructor(private employeService: EmployeService, private route: Router) {}
  public Employe = [];
  public id;
  ngOnInit() {
    this.employeService.currentData.subscribe(response => {
      if (response != null) {
        this.CreateEmploye = new FormGroup({
          empName: new FormControl(response.empName),
          empID: new FormControl(response.empID),
          empDomain: new FormControl(response.empDomain),
          empSalary: new FormControl(response.empSalary),
          empMobile: new FormControl(response.empMobile),
          empType: new FormControl(response.empType)
        });
        this.id = response._id;
      }
    });
  }
  onsubmit() {
    const data = this.CreateEmploye.value;
    if (this.id === undefined) {
      this.employeService
        .uploadEmploye(data)
        .subscribe(response => {
          if (response.status === 200) {
            this.route.navigate(['/EmployeList']);
            alert(response.message);

          } else {
            // alert('OOPS! The details provided are incorrect ');
            alert(response.message);
          }
        });
    } else {
      this.employeService.updateEmploye(this.id, data).subscribe(response => {
        if (response.status === 200) {
          alert(response.message);
          this.route.navigate(['/EmployeList']);

        } else {
          alert('OOPS! The details are not updated');
        }
      });
    }
  }
  clear() {
    this.CreateEmploye.reset();
  }
}
