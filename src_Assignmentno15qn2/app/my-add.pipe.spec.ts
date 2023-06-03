import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('Addition of two numbers trial1', () => {
    let obj=new MyAddPipe();
    let output=obj.transform(10,11);
    expect(output).toBe(21);
  });
  it('Addition of two numbers trial2', () => {
    let obj=new MyAddPipe();
    let output=obj.transform(10,10.2);
    expect(output).toBe(20.2);
  });
  it('Addition of two numbers trial3', () => {
    let obj=new MyAddPipe();
    let output=obj.transform(10.2,11.2);
    expect(output).toBe(21.4);
  });
  it('Addition of two numbers trial4', () => {
    let obj=new MyAddPipe();
    let output=obj.transform(0,11);
    expect(output).toBe(11);
  });
});
