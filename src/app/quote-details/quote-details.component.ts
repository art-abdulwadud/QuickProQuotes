import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  preNum:number;
  lastNum:number;
  counter:number;

  @Input() quotes;

  constructor() { }

  ngOnInit() {
  }

}
