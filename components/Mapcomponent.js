import React from 'react';

const YourMainComponent = () => {
  return (
    <div className=''>
      
      <div style={{ width: '100%', height: '200px' }}>
        <iframe
          width="100%"
          height="200"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default YourMainComponent;
