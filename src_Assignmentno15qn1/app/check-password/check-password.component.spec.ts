

import {CheckPasswordComponent } from './check-password.component';


describe('CheckPasswordComponent', () => 
{
  it('Should display password is  as per rules',()=>{
    let obj = new CheckPasswordComponent();

    var output=obj.CheckPassword("AeeeP@12");
    
    expect(output).toBe("Correct password(as per rules)");
  });
  it('Should display password is not as per rules',()=>{
    let obj = new CheckPasswordComponent();

    var output=obj.CheckPassword("AeeeP@111111");
    
    expect(output).toBe("Password is not as per rules");
  });
 
});

