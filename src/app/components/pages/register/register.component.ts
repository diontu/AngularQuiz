import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AccountService } from './../../../services/account/account.service'

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.accountService.register(
      this.form.get('firstName').value,
      this.form.get('lastName').value,
      this.form.get('username').value,
      this.form.get('password').value
    );

    //perform the backend check

    //if returned 409, then CONFLICT: Non Unique username Error
    //stay on same page, but output error message
    
    //if returned 500, then Internal Server Error
    //stay on same page, but output error message

    //if returned 200, then OK
    //redirect to login page with successful login message
  }
}
