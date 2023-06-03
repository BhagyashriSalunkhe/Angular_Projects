import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('Check Even number', () => {
    const pipe = new MarvellousChkPipe();
    let output=pipe.transform(-3,"even")
    expect(output).toBe("Number is not even")
    
  });
  it('Check Odd Number',()=>
  {
    let Obj=new MarvellousChkPipe();
    let output=Obj.transform(-3,"odd")
    expect(output).toBe("Number is odd")
  })
  it('Check prime Number',()=>
  {
    let Obj=new MarvellousChkPipe();
    let output=Obj.transform(40.20,"prime")
    expect(output).toBe("Number is prime")
  })
  it('Check perfect Number',()=>
  {
    let Obj=new MarvellousChkPipe();
    let output=Obj.transform(28,"perfect")
    expect(output).toBe("Number is perfect number")
  })
  it('Trial 1',()=>
  {
    let Obj=new MarvellousChkPipe();
    let output=Obj.transform(2,"addition")
    expect(output).toBe("No such function")
  })
  it('Trial 2',()=>
  {
    let Obj=new MarvellousChkPipe();
    let output=Obj.transform(2.2,"even")
    expect(output).toBe("Number is not even")
  })
  
});
