import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showNumberCard = false;

  constructor(public platformService: PlatformService) { }

  ngOnInit(): void {
  }

  toggleCard(): void {
    this.showNumberCard = !this.showNumberCard;
  }

  onLoadPaymentData = (
    event: Event
  ): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetail.detail);
  }
}
