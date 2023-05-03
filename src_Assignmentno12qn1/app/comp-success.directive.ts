import { Directive } from '@angular/core';
import { ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(public eref:ElementRef) { }

  @HostListener ('mouseenter') onmouseenter()
  {
    this.setcolor("green")
  }
  @HostListener ('mouseleave') onmouseleave()
  {
    this.setcolor("black")
  }
   setcolor(color:string)
  {
    this.eref.nativeElement.style.color=color
  }

}
