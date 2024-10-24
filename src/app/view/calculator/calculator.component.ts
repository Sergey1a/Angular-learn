import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  num1: number = 0;
  num2: number = 0;
  result: number | null = null;
  operation: string = 'addition';

  constructor() { }

  ngOnInit(): void {
  }

  calculate() {
    switch (this.operation) {
      case 'addition':
        this.result = this.num1 + this.num2;
        break
      case 'subtraction':
        this.result = this.num1 - this.num2;
        break
      case 'multiplication':
        this.result = this.num1 * this.num2;
        break
      case 'division':
        if(this.num2 !== 0) {
          this.result = this.num1 / this.num2;
        } else {
          alert('На ноль делить нельзя')
          this.result = null;
        }
        break
      default:
        this.result = null;
    }
  }
}
