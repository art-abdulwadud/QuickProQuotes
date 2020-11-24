import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
// Components

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { FormComponent } from './form/form.component';
// Directive
import { HighestUpvotesDirective } from './highest-upvotes.directive';
// Pipe
import { Timelapse } from './timelapse.pipe'

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    NavbarComponent,
    HighestUpvotesDirective,
    HomeComponent,
    FormComponent, 
    Timelapse
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
