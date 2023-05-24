import React from "react";

import './Footer.css'



const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="footer-div">
          <div className="footerinfo">
            <img src="./images/logo011.svg" alt="images" />
            <p className="shop-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="social-info" >
              <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer" className="link-tag">
                  <div className="footer-google">
                
                    <div className="social-google">
                      <img src="./images/new18.svg" alt="images" className="new18" />
                    </div>
                    <div className="mideaname">
                      <span className="store0">Get It On</span>
                      <span className="store1">Google Play</span>
                    </div>
                    
                  </div>
                </a>
                <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer" className="link-tag">
                  <div className="footer-google">
                    <div className="social-google">
                      <img src="./images/new19.svg" alt="images" className="new19" />
                    </div>
                    <div className="mideaname">
                      <span className="store0">Download On The </span>
                      <span className="store1">App Store</span>
                    </div>
                  </div> 
                </a>
            </div>
            
          </div>
          <div className="footer-about">
            <div className="about">
              <h3>About Us</h3>
              <span>Careers</span>
              <span>Our Stores</span>
              <span>Our Cares</span>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>
          <div className="footer-customer">
            <div className="customer">
              <h3>Customer Care</h3>
              <span>Help Center</span>
              <span>How To Buy</span>
              <span>Track Your Order</span>
              <span>Corporate & Bulk Purchasing</span>
              <span>Returns & Refunds</span>
            </div>
          </div>
          <div className="footer-contact">
            <div className="contact">
              <h3>Contact Us</h3>
              <span>70 Washington Square South, New York, Ny </span>
              <span>10012, United States</span>
              <span>Email: uilib.help@gmail.com</span>
              <span>Phone: +1 1123 456 780</span>
              
              <div className="fotericon">
                {/* <BsFacebook  className="social-icon"/>
                <AiFillGoogleCircle  className="social-icon"/>
                <AiFillTwitterCircle  className="social-icon"/>
                <SiYoutubemusic className="social-icon" />
                <AiFillInstagram  className="social-icon"/> */}
                <div className="icon-div"><a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer"><img src="./images/new20.svg" alt="images" className="new20 social-icon" /></a></div>
                <div className="icon-div"><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src="./images/new21.svg" alt="images" className="new21 social-icon" /></a></div>
                <div className="icon-div"><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src="./images/new22.svg" alt="images" className="new22 social-icon" /></a></div>
                <div className="icon-div"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><img src="./images/new23.svg" alt="images" className="new23 social-icon" /></a></div>
                <div className="icon-div"><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="./images/new24.svg" alt="images" className="new24 social-icon" /></a></div>
              </div>
              

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
