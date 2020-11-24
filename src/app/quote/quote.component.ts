import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quotes;
  @Output() delete = new EventEmitter();
  @Output() highestUpvote = new EventEmitter();

  hideQuoteDetails = true
  comment = '';

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.highestUpvote;
  }
  ngOnChanges(){}

  moreInfo(){
    return this.hideQuoteDetails = !this.hideQuoteDetails
  }
  onDelete(){
    console.log('deleted');
    this.delete.emit(this.quotes);
  }
  addDownvote(){
    this.quotes.downvotes+=1;
  }
  addUpvote(){
    this.quotes.upvotes+=1;
  }
}
