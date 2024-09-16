import React from 'react'
import '../assets/Home.css'

function Footer() {
  return (
    <>
    
{/* <!-- Footer start --> */}


<div class="footer-container">
    <div class="footer">
      <div class="footer-heading footer-1">
        <h5>ABOUT US</h5>
        <a href="https://www.bluestone.com/about.html">Who we are?</a>
        <a href="#">Management Team</a>
        <a href="#">Franchise Enquiry</a>
        <h5>COUSTOMER DELIGHT</h5>
        <a href="#">Contact Us</a>
        <a href="FooterFandQ.html">FAQ</a>
        <a href="#">1800-419-0066</a>
        <a href="#">9am-10pm,7day a week</a>
      </div>

      <div class="footer-heading footer-2">
        <h5>POLICIES</h5>
        <a href="#">Privacy Policy</a>
        <a href="http://127.0.0.1:5500/Blue-stone-clone/FooterTermsand.html">Terms & Conditions</a>
        <h5>SHOP WITH CONFIDENCE</h5>
        <a href="#">Why Buy From Us?</a>
        <a href="#">Our Certification</a>
        <a href="#">Press Room</a>
        <a href="#">Terminal Gaming</a>
      </div>

      <div class="footer-heading footer-3">
        <h5>JEWELLERY GUIDE</h5>
        <a href="#">Buying and Price Guide</a>
        <a href="#">Gifting Guide</a>
        <a href="#">Customer Care</a>
        <a> JEWELLERY CARE GUIDE</a>
      </div>

      <div id="dad">
         <div class="footer-heading footer-1">
            <h1>Download <br />Our App</h1>
            <a href="#">Shining new app,<br />
            made just <br /><br />
            for you! It's Free,<br />
            Easy & Smart.</a>
        </div>
      {/* <div>
          <img
            src="https://kinclimg5.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/static/home/app-footer.v2.png"
            alt="img"
            id="image"
          />
      </div> */}
      </div>
    </div>
    <br/>
    <hr class="footer-hr"/>
    <br/>
    <div class="final-part-of-footer">
      <div class="footer-email-form">
        <input
          type="email"
          placeholder="Enter email for our newletter"
          id="footer-email"/>
        
        <button type="Submit" class="subscribe-butn">
          SUBSCRIBE
        </button>
      </div>
      <div class="Social-Media-icon">
      <div> <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-square"></i></a></div>
      <div><a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a></div>
      <div><a href="https://www.youtube.com/"> <i class="fa-brands fa-youtube"></i></a></div>
      <div><a href="https://in.pinterest.com/"> <i class="fa-brands fa-pinterest-square"></i></a></div>
      <div><a href="https://www.instagram.com/"> <i class="fa-brands fa-instagram"></i></a></div>
      </div>
      <div id="mastercard">
    <div class="Social"> <a href="https://www.mastercard.co.in/en-in.html"><i class="fa-brands fa-cc-mastercard"></i></a></div>
    <div class="Social">  <a href="https://www.visa.co.in/"><i class="fa-solid fa-earth-americas"></i></a></div>
    <div class="Social"> <a href="https://www.americanexpress.com/en-in/"><i class="fa-brands fa-phabricator"></i></a></div>
      </div>
      <div class="kite">
    <a>© 2021 BlueStone. All Rights Reserved.</a>
    <br/>
    <a>CIN: U72900KA2011PTC059678</a>
    </div>
  </div>
 </div>
 </>
  )
}

export default Footer