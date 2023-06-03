

import { CountCapitalComponent } from './count-capital.component';


describe('CountCapitalComponent', () => 
{
  it('Should display capital letters 3',()=>{
    let obj = new CountCapitalComponent();

    obj.CountCapital("AeeeePG");
    
    expect(obj.Count).toBe(3);
  });
  it('Should display capital letters 2',()=>{
    let obj = new CountCapitalComponent();

    obj.CountCapital("4588**PG");
    
    expect(obj.Count).toBe(2);
  });
  it('Should display capital letters 3',()=>{
    let obj = new CountCapitalComponent();

    obj.CountCapital("qqqqqqqq");
    
    expect(obj.Count).toBe(0);
  });
});
