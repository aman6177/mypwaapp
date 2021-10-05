import { Component, OnInit } from '@angular/core';
import { PlatformService } from 'src/app/services/platform.service';

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

}
