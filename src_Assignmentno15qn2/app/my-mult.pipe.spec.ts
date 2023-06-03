import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMultPipe();
    expect(pipe).toBeTruthy();
  });
  it('should displat multiplication of numbers trial1',()=>{
    let obj=new MyMultPipe();
    let output=obj.transform(10,20)
    expect(output).toBe(200)
  })
  it('should displat multiplication of numbers trial2',()=>{
    let obj=new MyMultPipe();
    let output=obj.transform(10.20,-20)
    expect(output).toBe(-204)
  })
  it('should displat multiplication of numbers trial2',()=>{
    let obj=new MyMultPipe();
    let output=obj.transform(10.20,20.20)
    expect(output).toBe(206.04)
  })
});
