import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent
{
  @Input() public Message="";
  @Output() public Obj=new EventEmitter();

  public SendMessagetoParent()
  {
    this.Obj.emit("Hey Parent component")
  }
}
