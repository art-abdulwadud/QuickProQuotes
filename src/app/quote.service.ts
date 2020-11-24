import { QuoteDetails } from './quotes/quotes'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class QuoteService {
    quotes = [
        new QuoteDetails('Martin Fowler',"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",new Date(2016, 1, 5),0,0,"Mukhtar"),
        new QuoteDetails('Antoine de Saint-Exupery',`"Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away."`,new Date(2018, 9, 1),0,0,"David"),
        new QuoteDetails('Martin Fowler',`"When to use iterative development? You should use iterative development only on projects that you want to succeed."`,new Date(2005, 10, 7),0,0,"Abdullahi")
    ]

    get(){
        return this.quotes;
    }

    add(quote){
        this.quotes.unshift(quote);
    }

    delete(quote){
        const index = this.quotes.indexOf(quote);
        if (index >= 0){
            this.quotes.splice(index, 1)
        }
    }
}