import React ,{useState}from 'react';
import './App.css';
function Navbar({ handleSearchChange, searchQuery ,toggleSidebar}) {

   
  
    return (

        <nav className='navbar'>
        <button onClick={toggleSidebar}>Toggle</button>

            <div className="search-field">
      <input className="search-btn" type="text" value={searchQuery}
                    onChange={handleSearchChange}
                     placeholder="Search" />
                    <i className="fa fa-search"></i>
      </div>
            <div>
            </div>

        </nav>
    );
}

export default Navbar;
