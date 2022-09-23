import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  numbers = [1, 3, 6,5,0, 23,42,65,8,523,52];
  showNumbers = true;
  boxNumber=5;
  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(){
    this.showNumbers = !this.showNumbers;
  }

}
