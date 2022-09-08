import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  form: FormGroup;

  constructor(private restService: RestService, private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get firstName(): FormControl {
    return this.form.controls['firstName'] as FormControl;
  }

  get lastName(): FormControl {
    return this.form.controls['lastName'] as FormControl;
  }

  get email(): FormControl {
    return this.form.controls['email'] as FormControl;
  }

  ngOnInit(): void {}
}
