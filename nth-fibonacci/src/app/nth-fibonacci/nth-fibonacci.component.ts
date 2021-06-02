import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nth-fibonacci',
  templateUrl: './nth-fibonacci.component.html',
  styleUrls: ['./nth-fibonacci.component.scss']
})
export class NthFibonacciComponent implements OnInit {
  userInput:string='';
  nthFib:string='';

  constructor() { }

  ngOnInit(): void {
  }

  getNthFibonacci(number:any):any {
    if(number<0||number==null||number=='')return -1;
    else if(number==0)return 0;
    else if(number==1)return 1;
    else return this.getNthFibonacci(number-1)+this.getNthFibonacci(number-2);
  }

  printNthFibonacci(){
    let result=this.getNthFibonacci(this.userInput)
    result==-1?this.nthFib="Insert a number, zero or positive":this.nthFib=result;
  }
}
