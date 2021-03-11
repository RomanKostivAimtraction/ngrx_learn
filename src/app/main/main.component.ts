import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  counter = 0;
  updateAt?: number;
  // disbleBtn = false;
  constructor() { }

  ngOnInit(): void {
  }

  get canNotMinus(): boolean {
    return this.counter <= 0;
  }

  plus(): void {
    this.updateAt = Date.now();
    this.counter++;

  }

  minus(): void {
    this.updateAt = Date.now();
    this.counter--;
  }

  reset(): void {
    this.updateAt = Date.now();
    this.counter = 0;
  }
}
