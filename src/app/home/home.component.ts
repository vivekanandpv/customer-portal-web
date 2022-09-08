import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerViewModel } from '../_models/customer.models';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customers: Observable<CustomerViewModel[]>;

  constructor(private restService: RestService, private router: Router) {
    this.customers = this.restService.read<CustomerViewModel[]>(
      'http://localhost:8080/api/v1/customers'
    );
  }

  ngOnInit(): void {}

  add() {
    this.router.navigate(['/new-customer']);
  }
}
