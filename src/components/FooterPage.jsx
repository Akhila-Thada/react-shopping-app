import React from 'react';
import pay from './icons/pay.png'
import social from './icons/social.png'
import flag from './icons/flag.png'
import social1 from './icons/social5.png'
import './footer.css';


const FooterPage = () => {


    return (
        <div id='footer'>
            <div id="footer1">
                <div className='f-part'>
                    <h5>BE THE FIRST TO KNOW</h5>
                    <p>Lorem ipsum dolor sit amet Libero nulla praesentium error recusandae?</p>
                    <div id='email-container'>
                        <input type="email" placeholder='Enter your e-mail..' />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                <div>
                    <div className='f-part'>
                        <h5>CALL US</h5>
                        <p>+44 2211335360</p>
                        <p>o  CUstomercare@mettamuse.com</p>
                    </div>


                    <div className='f-part'>
                        <h5>CURRENCY</h5>
                        <div style={{ display: 'flex', marginBottom: '0.5rem' }}>
                            <img id='flag' src={flag} alt="flag" /><p style={{ display: 'flex', alignItems: 'center', paddingLeft: '0.5rem' }}> o USD</p>
                        </div>
                        <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>

            </div>
            <div id="footer2">
                <div className='f-part'><h5 className='dropdown-footer'><div>metta muse</div></h5>
                    <div>
                        <p>About Us</p>
                        <p>Stories</p>
                        <p>Artisans</p>
                        <p>Boutiques</p>
                        <p>Contact Us</p>
                        <p>EU Compliances Docs</p>

                    </div>
                </div>
                <div className='f-part'><h5 className='dropdown-footer'><div>QUICK LINKS</div></h5>
                    <div>
                        <p>Orders & Shipping</p>
                        <p>Join/Login as a Seller</p>
                        <p>Payment & Pricing</p>
                        <p>Return & Refounds</p>
                        <p>FAQs</p>
                        <p>Privacy Policy </p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
                <div className='f-part'><h5 className='dropdown-footer'><div>FOLLOW US</div></h5>
                    <div>
                        <img className='social-img' src={social} alt="github" />

                        <img className='social-img' src={social1} alt="linked in" />                </div>
                </div>
                <div id='pay'>
                    <h5>metta muse ACCEPTS</h5>
                    <img src={pay} alt="" />
                </div>
            </div>
            <p style={{ padding: '0 1rem 0.5rem' }}>Copyright@2023 mettamuse. All rights reserved</p>
        </div>
    );
};

export default FooterPage;
