import { Component, OnInit } from '@angular/core';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  constructor(private restService: RestService) {}

  ngOnInit(): void {}
}
