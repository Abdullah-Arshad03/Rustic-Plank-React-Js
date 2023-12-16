import React from "react";
import logo from '../../../images/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar = () =>{
    return(<>
      <nav classNameName="navigation">
        <img className="logo-image" src={logo} />
        <ul className="nav-things">
          <li>Home</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        <ol className="my-account account-things ">
          <li> <a href="/RegistrationPage.html">Sign Up</a> </li>
          <li>
        <ShoppingCartIcon Size={1}/>
          </li>
          <li className="zero-item">0 item</li>
        </ol>
      </nav>

      <header className="categories">
        <ul>
          <li>BEDSs</li>
          <li>CABINETS</li>
          <li>BOOKCASES</li>
          <li>BOXES</li>
          <li>CHAIRS</li>
          <li>TABLES</li>
          <li>
            <div className="search-btn">
              <input type="text" placeholder="search"/>
              {/* <i
                className="fa-solid fa-magnifying-glass"
                style="color: #f97907"
              ></i> */}
            </div>
          </li>
        </ul>
      </header>

    </>)

}


export default Navbar