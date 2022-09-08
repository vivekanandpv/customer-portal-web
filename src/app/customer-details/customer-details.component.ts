import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerViewModel } from '../_models/customer.models';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  customerId: number;
  customer$: Observable<CustomerViewModel>;

  constructor(private restService: RestService, private ar: ActivatedRoute) {
    this.customerId = +(this.ar.snapshot.paramMap.get('id') ?? 0);
    this.customer$ = this.restService.read<CustomerViewModel>(
      'http://localhost:8080/api/v1/customers/' + this.customerId
    );
  }

  ngOnInit(): void {}
}
