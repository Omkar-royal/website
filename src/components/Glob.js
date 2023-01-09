import React from 'react';
import image3 from '../images/ILLUSTRATION.png';



function Nav2() {
    return (
       <div className='container'>

        <div className='items items1'><h6 id='h66'>Claim a Free Quote</h6>

<h1><span>Get started</span> on fulfilling 
your Dubai or UAE 
dream.</h1></div>
<div className='items items2'><img id='img1'src={image3} alt='' /></div>
<div className='items items3'><h6 id='h66'>UAE & Offshore Company</h6>
<p><b>
We provide you with information about UAE or 
Offshore Company Registration & help you 
setup your company with a bank account and 
visas.</b></p>
<input  id='a1'type='submit' value='Start  A  Company' />
<input id='a2' type='submit' value='Renew  A  Company' />
</div>
      </div>
  
    );
}

export default Nav2;