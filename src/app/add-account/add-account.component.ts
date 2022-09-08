import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AccountCreateViewModel,
  AccountViewModel,
} from '../_models/account.models';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss'],
})
export class AddAccountComponent implements OnInit {
  form: FormGroup;
  custId: number;

  constructor(
    private restService: RestService,
    private ar: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.custId = +(this.ar.snapshot.paramMap.get('customerId') ?? 0);
    this.form = this.fb.group({
      customerId: [this.custId, [Validators.required]],
      type: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }

  ngOnInit(): void {}

  get customerId(): FormControl {
    return this.form.controls['customerId'] as FormControl;
  }

  get type(): FormControl {
    return this.form.controls['type'] as FormControl;
  }

  onSubmit() {
    if (this.form.valid) {
      this.restService
        .create<AccountCreateViewModel, AccountViewModel>(
          'http://localhost:8080/api/v1/accounts',
          this.form.value
        )
        .subscribe((res) => {
          console.log('Account Created', res);
          this.router.navigate(['/']);
        });
    }
  }
}
