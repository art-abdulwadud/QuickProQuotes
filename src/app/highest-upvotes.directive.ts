import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighestUpvotes]'
})
export class HighestUpvotesDirective {
  
  selectedElement: ElementRef

  constructor(private element: ElementRef) {
    this.selectedElement = element
   }
   ngOnInit(){
     this.element.nativeElement.style.color = 'green';
     console.log(this.element)
   }

}
