import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterSelector, minus, plus, reset, updatedAtSelector } from '../reducers/counter';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // counter = 0;
  // updateAt?: number;
  // disbleBtn = false;

  count$ = this.store.select(counterSelector);
  canNotMinus$ = this.count$.pipe(map(count => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector)

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  plus(): void {
    this.store.dispatch(plus());
  }

  minus(): void {
    this.store.dispatch(minus())
  }

  reset(): void {
    this.store.dispatch(reset())
  }
}
