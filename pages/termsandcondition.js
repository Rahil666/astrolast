
import React, { useEffect, useState } from 'react';


const ServiceDetail = () => {
 

  return (
    <>
      <br />
      <br />
      <br />
      <div className="herobanner">
        <div className="container align-items-center justify-content-center d-flex">
          <div className="col-12 align-items-center justify-content-center d-flex">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <h1>Terms And Condition</h1>
              <p className='bannersub'>
                Dive into the mystical world of astrology and discover the secrets written in the stars.
                Our experts provide insights and guidance based on your unique astrological profile.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className='col-12'>
          <div className='row'>
            <div className='col-6'>
              <img src=  '/Assets/contaimhg.png' alt='asset' className="service-image" />
            </div>
            <div className='col-6'>
             
              <p>

              Terms and Conditions
              Refund Option
              We offer a refund option for all purchases made through our platform. To be eligible for a refund, you must submit your request within 14 days of the purchase date. Refunds will be processed to the original payment method within 7-10 business days after the request has been approved.
              
              Free Subscription Limitations
              Our free subscription plan has certain limitations. These include restricted access to premium content, limited usage of features, and a cap on the number of allowed bookings. For full access to all features and content, consider upgrading to one of our paid subscription plans.
              
              Booking Cancellation Time Period
              You can cancel your booking up to 24 hours before the scheduled time. If you cancel within this period, you will receive a full refund. Cancellations made less than 24 hours before the scheduled time may not be eligible for a refund.
              
              Membership Cancellation, Extension, and Upgrading
              Members have the flexibility to cancel, extend, or upgrade their memberships.
              
              Cancellation: You can cancel your membership at any time. If you cancel, you will retain access to your membership benefits until the end of the current billing cycle.
              
              Extension: To extend your membership, you can renew it before the expiration date. This ensures uninterrupted access to all benefits.
              
              Upgrading: You can upgrade your membership at any time to enjoy additional benefits. The cost difference between your current and new membership plan will be prorated and charged accordingly.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;


