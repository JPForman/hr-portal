import React from 'react';
import '../scss/_loggedOutHeader.scss'
import { Link } from 'react-router-dom';

//need to add a log out button

export default function LoggedOutHeader(){


  return(
  <div className="loggedOutHeader">
      
    <div className='theoremLogoWrapper'>
      <img className='theoremLogo' src="https://theoremadvertising.com/wp-content/uploads/2019/04/cropped-logo-1.png" alt="theorem logo"/>
    </div>
  </div>
  )
}
