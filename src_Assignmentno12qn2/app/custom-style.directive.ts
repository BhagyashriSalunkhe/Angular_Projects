import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective 
{

  constructor(public ele:ElementRef)
  {
    this.ele.nativeElement.style.backgroundColor="yellow"
    this.ele.nativeElement.style.fontWeight="bold"
    this.ele.nativeElement.style.fontStyle="italic"
  }

}
