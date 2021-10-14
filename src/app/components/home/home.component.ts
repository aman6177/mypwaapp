import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform.service';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showNumberCard = false;
  creditCardNum = "4232 1111 1111 1111";

  constructor(public platformService: PlatformService,
    private clipboardApi: ClipboardService
    ) { }

  ngOnInit(): void {
  }

  toggleCard(): void {
    this.showNumberCard = !this.showNumberCard;
  }

  copyToClipboard() {
    this.clipboardApi.copyFromContent(this.creditCardNum)
  }

  onLoadPaymentData = (
    event: Event
  ): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetail.detail);
  }
}
