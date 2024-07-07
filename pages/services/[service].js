// pages/services/[service].js

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceDetail = () => {
  const router = useRouter();
  const { service } = router.query;
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    if (service) {
      // Fetch service data from the API
      const fetchServiceData = async () => {
        try {
          const response = await axios.get('https://lunarsenterprises.com:5005/jyothisham/list/service');
          const foundService = response.data.data.find(s => s.s_name.toLowerCase().replace(/\s+/g, '-') === service.toLowerCase());
          setServiceData(foundService);
        } catch (error) {
          console.error(error);
        }
      };

      fetchServiceData();
    }
  }, [service]);

  if (!serviceData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <br />
      <br />
      <br />
      <div className="herobanner">
        <div className="container align-items-center justify-content-center d-flex">
          <div className="col-12 align-items-center justify-content-center d-flex">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <h1>{serviceData.s_name}</h1>
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
              <img src={`https://lunarsenterprises.com:5005/${serviceData.s_image}`} alt={serviceData.s_name} className="service-image" />
            </div>
            <div className='col-6'>
              <h1>{serviceData.s_name}</h1>
              <p>{serviceData.s_description}</p>
              <span>Status: {serviceData.s_status}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;


