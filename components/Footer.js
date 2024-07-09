import React from 'react'
import Link from 'next/link'
import GoogleMapComponent from './Mapcomponent'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className='footer bgcolor head-footer-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <img src="/Assets/logoabc.png" width='142' height='105' alt="logo" />
              <div className='space5'></div>
              <p></p>

            </div>
            <div className='col-lg-2'>
              <h5>SERVICES</h5>
              <ul className='footer-nav'>
              
                <li><Link href="/">Astrological Forecasts</Link></li>
                <li><Link href="/">Astrological Report</Link></li>
                <li><Link href="/">Horoscope Readings</Link></li>
                <li><Link href="/">Love Compatibility</Link></li>
              </ul>
            </div>
            <div className='col-lg-2'>
              <h5>LINK</h5>
              <ul className='footer-nav'>
                <li><Link href="/termsandcondition">Terms and Condition</Link></li>
                <li> <Link href="/termsandcondition">Privacy Policy</Link></li>
                
                
              </ul>
            </div>
            <div className='col-lg-3 '>
              <h5>Contact Info</h5>
             
              <ul className='footer-nav'>
                <li><IoCall />  <span> Username @example.com</span></li>
                <li><MdEmail /><span>0000-222-333</span></li>
                <li><FaLocationDot /><span>,dc,d,dc,m</span></li>
              </ul>
            </div>

            <div className='col-lg-2 '>
              <h5>Our Locations</h5>
              <ul className='footer-nav'>
              <GoogleMapComponent />
              </ul>
            </div>
          </div>
        </div>
      
      </div>
      <div className='copy-right'>
        <div className='copy-right-text'>© 2024, Powered by Astrology</div>
      </div>
    </>
  )
}
