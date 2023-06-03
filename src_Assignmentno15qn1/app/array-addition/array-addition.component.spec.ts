

import { ArrayAdditionComponent } from './array-addition.component';

describe('CountCapitalComponent', () => 
{
  it('Should display Addition of Array trial1',()=>{
    let obj = new ArrayAdditionComponent();
    var Arr=[10,20,30,40,50]
    var output=obj.ArrayAddition(...[],Arr);
    
    expect(output).toBe(150);
  });

  it('Should display Addition of array trial2',()=>{
    let obj=new ArrayAdditionComponent();

    var Arr=[-10,-20,-30];
    var output=obj.ArrayAddition(...[],Arr);
    expect(output).toBe(-60);
  })

  it('Should display addition of array trial3',()=>
  {
    let obj=new ArrayAdditionComponent();
    var Arr=[10,-20,-30]
    var output=obj.ArrayAddition(...[],Arr);
    expect(output).toBe(-40)
  })
 
});
