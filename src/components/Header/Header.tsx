import logo from "../../assets/Logo-1.png";
import cart from "../../assets/Group45.png";
import profile from "../../assets/Frame627.png";
import nav from "../../assets/Vector.png";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="Cart" />
        </div>

        {/* Navigation Section */}
        <nav className="nav-links">
          <a href="#" className="nav-item">
            Home
          </a>
          <a href="#" className="nav-item">
            About Us
          </a>
          <a href="#" className="nav-item">
            Blog
          </a>
          <a href="#" className="nav-item">
            Shop
          </a>
          <a href="#" className="nav-item">
            Contact Us
          </a>
        </nav>

        {/* Icons Section */}
        <div className="icons">
          {/* Cart Icon */}
          <div className="cart-icon">
            <button>
              <img src={cart} alt="Cart" />
            </button>
          </div>

          {/* Profile Icon */}
          <button className="profile-icon">
            <img src={profile} alt="Profile" />
          </button>

          {/* Hamburger Icon */}
          <button className="hamburger-icon">
            <img src={nav} alt="Menu" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
