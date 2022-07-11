import React from 'react';
import "./Footer.css";

export const Footer = () => {
  return (
    <>
    <div>
    <footer class="footer-section">
    <hr style={{height:"0.1px"}}></hr>
    <div class="container" style={{marginTop:"-2rem"}}>
        <div class="footer-cta pt-5 pb-5">
            <div class="row">
                <div class="col-xl-4 col-md-4 mb-30">
                    <div class="single-cta">
                        <i class="fas fa-map-marker-alt" style={{marginbottom:"rem"}}></i>
                        <div class="cta-text">
                            <h4>Find us</h4>
                            <span>Zakir Husain College of Engineering and Technology , AMU</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-4 mb-30">
                    <div class="single-cta">
                        <i class="fas fa-phone"></i>
                        <div class="cta-text">
                            <h4>Call us</h4>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-4 mb-30">
                    <div class="single-cta">
                        <i class="far fa-envelope-open"></i>
                        <div class="cta-text">
                            <h4>Mail us</h4>
                            <span>opensourceapis@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-content pt-5 pb-5">
            <div class="row">
                <div class="col-xl-4 col-lg-4 mb-50">
                    <div class="footer-widget">
                        <div class="footer-logo">
                            <a href="/"><img src="assests/images/logo.svg" class="img-fluid" alt="logo" style={{height:"50px"}}/></a>
                        </div>
                        <div class="footer-text">
                            <p>We build Open APIs for developers </p>
                        </div>
                       
                    </div>
                </div>
                
                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div class="footer-widget">
    
                        <div class="footer-text mb-25">
                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        </div>
                        <div class="subscribe-form">
                            <form action="#">
                                <input type="text" placeholder="Email Address"></input>
                                <button><i class="fab fa-telegram-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
        
                <div class="col-xl-4 col-lg-4 col-md-6 mb-20">
                    <div class="footer-widget">
    
                    <div class="footer-social-icon">
                            <span style={{color:"black"}}>Follow us</span>
                            <a href="https://github.com/OpenAPIs-Tech"><i class="fab fa-github github-bg"></i></a>
                            <a href="https://www.linkedin.com/company/openapis"><i className="fab fa-linkedin linkedin-bg"></i></a>
                            <a href="mailto:opensourceapis@gmail.com"><i class="fab fa-google-plus-g google-bg"></i></a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</footer>
</div>
</>
  );
};
export default Footer;