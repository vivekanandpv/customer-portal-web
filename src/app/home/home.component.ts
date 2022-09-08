import { Component, OnInit } from '@angular/core';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private restService: RestService) {}

  ngOnInit(): void {}
}
