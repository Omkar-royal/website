import React from 'react';
import Nav from './Nav';
import Nav2 from './Glob';
import Glob1 from './Glob1';
import Glob2 from './Glob2';
import Glob3 from './Glob3';
import Glob4 from './Glob4';
import Glob5 from './Glob5';
import Glob7 from './Glob7';
import Glob8 from './Glob8';
import Search from './Search';





function Header()
{
    return (
        <div>
            <Nav/>
            <Search/>
            <Nav2 />
            <Glob1/>
            <Glob2 />
            <Glob3 />
            <Glob4 />
            <Glob5 />
            <Glob7 />
            <Glob8 />
            
        
         
        </div>
    )
}

export default Header;