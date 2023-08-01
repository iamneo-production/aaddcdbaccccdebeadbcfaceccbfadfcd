import { Component } from '@angular/core';
import { ForexConverterPipe } from './forex-conversion.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ForexConverterPipe]
})
export class AppComponent {
  fromCurrency: string = '1.126735';
  toCurrency: string = '1.126735';
  amount: string = '0';
  result: string | null = null; // Change 'string | undefined' to 'string | null'

  constructor(private forex: ForexConverterPipe) {}

  convert() {
    if (this.amount === '0') {
      this.result = this.forex.transform(this.amount, this.fromCurrency, this.toCurrency);
    } else {
      const convertedValue = this.forex.transform(this.amount, this.fromCurrency, this.toCurrency);
      this.result = convertedValue !== null ? convertedValue.toString() : null;
    }
  }
}
