import { Directive } from '@angular/core';
import { ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(public eref:ElementRef) { }

  @HostListener ('mouseenter') onmouseenter()
  {
    this.setcolor("red")
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
