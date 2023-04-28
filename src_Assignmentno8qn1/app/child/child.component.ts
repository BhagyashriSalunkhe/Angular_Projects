import { Component,  EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
  @Output() public eobj=new EventEmitter

   SendMessage(value:any)
  {
    this.eobj.emit(value)
  }

}
