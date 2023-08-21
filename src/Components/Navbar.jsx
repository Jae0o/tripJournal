import React from 'react';
import '../CSS/Navbar.css';
import { TbWorld } from 'react-icons/tb'

export default function Navbar() {
  return (
    <nav className='navBox'>

      <div className='nav_left'>
        <div className='nav_left_logobox'>
          <TbWorld className='nav_left_logobox_logo' />
        </div>
      </div>


      <div className='nav_right'>
        <div className='nav_right_buttonBox'>
          <button className='nav_right_buttonBox_login'>
            Login
          </button>
        </div>

        <div className='nav_right_buttonBox' >
          <button className='nav_right_buttonBox_toggle'>
            toggle
          </button>
        </div>
      </div>

    </nav>
  )
}
