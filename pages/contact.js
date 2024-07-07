import React, { useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://lunarsenterprises.com:5005/jyothisham/contact-us", {
        first_name: formData.firstName,
        last_name: formData.lastName,
        mobile: formData.phone,
        email: formData.email,
        message: formData.message,
      });
      setLoading(false);
      setShowModal(true);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error("There was an error sending the message!", error);
    }
  };

  return (
    <>
      <div className="herobanner">
        <div className="container align-items-center justify-content-center d-flex">
          <div className="col-12 align-items-center justify-content-center d-flex">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <h1>CONTACT US</h1>
              <p className='bannersub'>
              {t('Dive into the mystical world of astrology and discover the secrets written in the stars.Our experts provide insights and guidance based on your unique astrological profile.')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bgcolorunder">
        <div className="container">
          <div className="underhorse col-12">
            <h1 className='underhorsemain'>Get in Touch</h1>
            <p className="ZodiaserBook">
              We're here to assist you. Reach out to us with any questions, concerns, or feedback you may have.<br/>
              Our team is dedicated to providing the best service possible and ensuring your satisfaction.
            </p>
            <div className="col-12">
              <div className='row'>
                <div className='col-8'>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className='col-6'>
                        <h6 className='bookname'>First Name</h6>
                        <input
                          className='form-control inputbook'
                          placeholder="First Name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className='col-6'>
                        <h6 className='bookname'>Last Name</h6>
                        <input
                          className='form-control inputbook'
                          placeholder="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className='col-6'>
                        <h6 className='bookname'>Your Number*</h6>
                        <PhoneInput
                          country={'in'}
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          inputStyle={{ height: '50px' }}
                          inputClass="form-control inputbook"
                          required
                        />
                      </div>
                      <div className='col-6'>
                        <h6 className='bookname'>Email</h6>
                        <input
                          className='form-control inputbook'
                          type="email"
                          placeholder="Enter the Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className='mt-5'>
                      <h6 className='bookname'>Message (optional)</h6>
                      <input
                        className='form-control inputbooknsh'
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button
                      className="custom-button mt-5"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </div>
                <div className='col-4'>
                  <img src="/Assets/contaimhg.png" className="assetsstyle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal 
      centered
      show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your message has been sent successfully.Our team Connect soon!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Contact;
