import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quotes;
  
  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.quotes = this.quoteService.get();
  }

  deleteQuote(quote){
    this.quoteService.delete(quote);
  }
}
