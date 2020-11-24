import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { QuoteService } from  '../quote.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  hideForm = true;
  hideSuccess = true;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private quoteService: QuoteService){}
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      submited_by: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])),
      author: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])),
      quote: this.formBuilder.control('', Validators.required),
      date_created: new FormControl(new Date(Date.now())),
      upvotes: 0,
      downvotes: 0
    });
  }

  showForm(){
    this.hideSuccess = true;
    return this.hideForm = !this.hideForm;
  }
  onSubmit(quote){
    this.hideSuccess = false;
    this.hideForm = true;
    this.form.reset();
    this.quoteService.add(quote);
  }

}
