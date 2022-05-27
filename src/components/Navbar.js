import React from 'react';
import Cnopka from './Cnopka'
import Navbar2 from './navbarla/Navbar2'
import Navbar3 from './navbarla/Navbar3'
import Navbar4 from './navbarla/Navbar4'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import Rasmcha from './navbarla/Rsamcha'
const Navbar = () => {
    return (
        <div className='Navbar1'>
            <img className='nav' src="Снимок веб-страницы_26-5-2022_13225_www.themoviedb.org.jpeg" alt="" />
            <div className='knopkala'>
                <span className='sauka'><Cnopka /></span>
                <span className='sauka1'><Navbar2 /></span>
                <span className='sauka2'><Navbar3/></span>
                <span className='sauka3'><Navbar4/></span>
            </div>
            
            <div className='card1'>
                <div className="qoshamiz">
                <AddIcon/>
                </div>
                <h4 className="ozgar" >RU</h4>
                <h4 className='sanmi'><AddAlertIcon/></h4>
                <h4 className='sanku'><Rasmcha/></h4>
                <div className='qidiruv'>
                <SearchIcon/>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
