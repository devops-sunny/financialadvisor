 /* eslint-disable */
import { Link } from "react-router-dom";
// import logo from "../../assets/img/logo-icon.svg"; // Ensure this path is correct
import logo from '../assets/img/logo-icon.svg';
import '../assets/css/style.css';

const Header = () => {
  return (

    
    <header className="ak-site_header ak-style1 ak-sticky_header">
      <div className="ak-main_header">
        <div className="container">
          <div className="ak-main_header_in">
            {/* Left Section - Logo */}
            <div className="ak-main-header-left">
              <Link className="ak-site_branding" to="/">
                <img src={logo} alt="Logo" height="141px" className="logo" />
              </Link>
            </div>
              
            {/* Center Section - Navigation */}
            <div className="ak-main-header-center">
              <nav className="ak-nav ak-medium">
                <ul className="ak-nav_list">
                  <li>
                    <Link to="/">Home</Link>
                    {/* <ul>
                      <li><Link to="/">Home 1</Link></li>
                      <li><Link to="/index-two">Home 2</Link></li>
                      <li><Link to="/index-three">Home 3</Link></li>
                    </ul> */}
                  </li>
                  <li><Link to="/about">About</Link></li>
                  <li >
                    <Link to="/services">Services</Link>
                   
                  </li>
                  {/* <li><Link to="/pricing">Pricing</Link></li> */}
                  {/* <li className="menu-item-has-children">
                    <Link to="#">Pages</Link>
                    <ul>
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/blog-details">Blog Details</Link></li>
                      <li><Link to="/team">Team</Link></li>
                      <li><Link to="/team-details">Team Details</Link></li>
                      <li><Link to="/case-study">Case Study</Link></li>
                      <li><Link to="/case-study-details">Case Study Details</Link></li>
                      <li><Link to="/coming-soon">Coming Soon</Link></li>
                      <li><Link to="/404">404 Page</Link></li>
                    </ul>
                  </li> */}
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>

            {/* Right Section - Button */}
            <div className="ak-main-header-right">
              <Link to="/contact" className="common-btn">
                <span> Get Started</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_201_978435345)">
                      <path
                        d="M1.42236 6.99728H13.089M13.089 6.99728L7.48903 1.39728M13.089 6.99728L7.48903 12.5973"
                        stroke="#030917"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_201_978435345">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0.00927734)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bar-border"></div>
    </header>
    
  );
};

export default Header;
