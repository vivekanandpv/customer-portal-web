import { Component, OnInit } from '@angular/core';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss'],
})
export class AddAccountComponent implements OnInit {
  constructor(private restService: RestService) {}

  ngOnInit(): void {}
}
