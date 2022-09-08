import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CustomerUpdateViewModel,
  CustomerViewModel,
} from '../_models/customer.models';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss'],
})
export class UpdateCustomerComponent implements OnInit {
  form: FormGroup;
  customerId: number;

  constructor(
    private restService: RestService,
    private ar: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.customerId = +(this.ar.snapshot.paramMap.get('id') ?? 0);
    this.form = this.fb.group({
      id: [this.customerId],
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      active: [true],
    });
  }

  get id(): FormControl {
    return this.form.controls['id'] as FormControl;
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

  get active(): FormControl {
    return this.form.controls['active'] as FormControl;
  }

  ngOnInit(): void {
    this.restService
      .read<CustomerViewModel>(
        'http://localhost:8080/api/v1/customers/' + this.customerId
      )
      .subscribe((res) => {
        this.form.patchValue(res);
      });
  }

  onSubmit() {
    if (this.form.valid) {
      this.restService
        .update<CustomerUpdateViewModel, CustomerViewModel>(
          'http://localhost:8080/api/v1/customers/' + this.customerId,
          this.form.value
        )
        .subscribe((res) => {
          console.log('Customer Updated', res);
          this.router.navigate(['/']);
        });
    }
  }
}
