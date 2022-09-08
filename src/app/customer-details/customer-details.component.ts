import { Component, OnInit } from '@angular/core';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  constructor(private restService: RestService) {}

  ngOnInit(): void {}
}
