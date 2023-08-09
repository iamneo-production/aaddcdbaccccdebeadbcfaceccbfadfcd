import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  opt1: number = 0;
  opt2: number = 0;
  amt: number = 0;
  res: string = '';
  result: string = '';

  exchange(a: number, b: number, amt: number): string {
    if (a !== 0 && b !== 0) {
      this.result=Math.round(amt/(a/b)).toFixed(2);
      return this.result;
    }
    return '';
  }
}