import React from 'react';
import image5 from '../images/dungeon.png';
import image6 from '../images/Vector-2.png';
import image7 from '../images/Vector-1.png';




function Glob2() {
    return (
       <div className='container2'>

        <div className='ite ite1'>
            <img id='img5' src={image5} alt='img5' />
        <h6 id='h67'>UAE Free Zone Company</h6>
        <p id='p1'>Your registration agent, will answer all 
of your questions and help you to reach 
a conclusion that meets your objectives 
of investing in the UAE.</p>
<h6 id='h68'>Get Started</h6>
        </div>
<div className='ite ite2'>

<img id='img5' src={image6} alt='img6' />

<h6 id='h67'>Dubai Local Companies</h6>
<p id='p1'>The Dubai LLC formation documents 
are actually articles of organization or a 
certificate of organization. You can get 
yours today.</p>
<h6 id='h68'>Get Started</h6>
</div>
<div className='ite ite3'>
<img id='img5' src={image7} alt='img7' />
<h6 id='h67'>Offshore Compamies</h6>
<p id='p1'>You can register an offshore company 
and open its bank account in Dubai. 
Your agent will help you along all the 
process</p>
<h6 id='h68'>Get Started</h6>

</div>

      </div>
  
    );
}

export default Glob2;