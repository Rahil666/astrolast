import "@splidejs/react-splide/css";
import Head from "next/head";

import React, { useEffect, useRef, useState } from "react";

import { Button, Modal, Spinner } from "react-bootstrap";

import { useTranslation } from 'react-i18next';
import $ from 'jquery';
import 'select2';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import axios from "axios";
import Testmonial from "@/components/Testmonial";
export default function HomePage() {

  
  
  const { t } = useTranslation();

  const selectRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        services: "",
        date: "",
    });



    const [servicesApi, setServicesApi] = useState([]);

    useEffect(() => {
      const servicesList = async () => {
        try {
          const servicesResp = await axios.get('https://lunarsenterprises.com:5005/jyothisham/list/service');
          setServicesApi(servicesResp.data.data);
          console.log(servicesResp.data.data, 'servicesRespData');
        } catch (error) {
          console.error(error);
        }
      };
  
      servicesList();
    }, []);

    useEffect(() => {
        $(selectRef.current).select2({
            placeholder: 'Select an option',
            width: '100%',
        });

        $(selectRef.current).on('change', (event) => {
            setSelectedOption(event.target.value);
            setFormData((prevData) => ({
                ...prevData,
                services: event.target.value
            }));
        });

        return () => {
            $(selectRef.current).select2('destroy');
        };
    }, []);

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
            await axios.post("https://lunarsenterprises.com:5005/jyothisham/add/booking", {
                first_name: formData.firstName,
                last_name: formData.lastName,
                mobile: formData.phone,
                email: formData.email,
                message: formData.message,
                service: formData.services,
                date: formData.date
            });
            setLoading(false);
            setShowModalbook(true);
            setFormData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                message: "",
                services: "",
                date: "",
            });
        } catch (error) {
            setLoading(false);
            console.error("There was an error sending the message!", error);
        }
    };




  const boxestone = [
    { title: "Aries", image: '/Assets/Diamond.png' },
    { title: "Taurus", image: "/Assets/taurus.png" },
    { title: "Gemini", image: "/Assets/gemini.png" },

    { title: "Cancer", image: "/Assets/cancer.png"},
    { title: "Leo", image: "/Assets/Leo.png"},
    { title: "Virgo", image: "/Assets/Virgo.png"},
    { title: "Libra", image: "/Assets/Libra.png"},
    { title: "Scorpio", image: "/Assets/Scorpio.png"},
    { title: "Capricorn", image: "/Assets/cap.png"},
    { title: "Aquarius", image: "/Assets/aqu.png" },
    { title: "Pisces", image: "/Assets/pis.png" },
    { title: "Sagittarius", image: "/Assets/sag.png" },
  ];

  

  



  const boxestitle = [
    {id:1, title: "Horoscope",  },
   
    { id:2,title: "Love Compatibility",  },
  
   
    
  
  ];


  const boxeshorcopse = [
    { title: "Astrological FORECAST", image: "/Assets/blog1.jpg"
      ,subtitle:'Important Festivals and their Dates based on Hindu Lunar Calendar. ',
     },
    { title: "Astrological Reports", image: "/Assets/blog2.jpg",subtitle:'Mercury is the lord of communications.' },
    { title: "HOROSCOPE READING", image: "/Assets/three.png",subtitle:'The word "horoscope" is derived from the Greek words "hora" (time) and "scopos" (observer), meaning "time observer.' },

    { title: "LOVE COMPATIBILTY", image: "/Assets/blog3.jpg",subtitle:'Understand compatibility in romantic relationships through the wisdom of the stars. '},
  
  ];
  const boxeshorcopselower = [
    { title: "Vasthu", image: "/Assets/vasthu.jpg"
      ,subtitle:'Spiritual energy flow.',
     },
    { title: "Horoscope Matching", image: "/Assets/blog3.jpg",subtitle:'Harmony through astrology.' },
    { title: "Jathakam", image: "/Assets/pothutham.webp",subtitle:'Marriage is a sacred bond.' },

    { title: "Health and Astrology", image: "/Assets/health.jpg",subtitle:'Health Problem Solution'},
  
  ];


  const boxeshorcopseblog = [
    { title: "History of Astrology", image: "/Assets/art5.jpg",link:'https://en.wikipedia.org/wiki/History_of_astrology'
      ,subtitle:'This article explores the historical development of astrology from ancient times to the modern era.',
     },
    { title: "Astrological Compatibility", image: "/Assets/art2.webp",subtitle:'This article discusses how astrological signs are believed to interact and influence romantic and personal relationships. ', link:"https://en.wikipedia.org/wiki/Astrological_compatibility" },
    { title: "Astrological Age", image: "/Assets/art3.jpg",subtitle:' This article explains the concept of astrological ages, which are periods of time lasting approximately 2,150 years, .',link:"https://en.wikipedia.org/wiki/Astrological_age" },

    { title: "Vedic Astrology", image: "/Assets/art4.png",subtitle:'Understand compatibility in romantic relationships through the wisdom of the stars. ',link:'https://en.wikipedia.org/wiki/Hindu_astrology'},
  
  ];


  const boxeshorcopseunder = [
    { title: "ARIES", image: "/Assets/Aone.png", subtitle: 'Confident, Energetic, Bold' },
    { title: "TAURUS", image: "/Assets/taurus-horoscope-astrology-zodiac.png", subtitle: 'Reliable, Patient, Determined' },
    { title: "GEMINI", image: "/Assets/gemini-horoscope-astrology-zodiac.png", subtitle: 'Curious, Adaptable, Sociable' },
    { title: "CANCER", image: "/Assets/cancer-horoscope-astrology-zodiac.png", subtitle: 'Emotional, Nurturing, Intuitive' },
    { title: "LEO", image: "/Assets/leo-horoscope-astrology-zodiac.png", subtitle: 'Generous, Charismatic, Leader' },
    { title: "VIRGO", image: "/Assets/virgo-horoscope-astrology-zodiac.png", subtitle: 'Analytical, Practical, Diligent' },
    { title: "LIBRA", image: "/Assets/libra-horoscope-astrology-zodiac.png", subtitle: 'Diplomatic, Charming, Fair' },
    { title: "SCORPIO", image: "/Assets/scorpio-horoscope-astrology-zodiac.png", subtitle: 'Passionate, Mysterious, Intense' },
    { title: "SAGITTARIUS", image: "/Assets/sagittarius-horoscope-astrology-zodiac.png", subtitle: 'Adventurous, Optimistic, Independent' },
    { title: "CAPRICORN", image: "/Assets/cancer-horoscope-astrology-zodiac.png", subtitle: 'Disciplined, Ambitious, Practical' },
    { title: "AQUARIUS", image: "/Assets/aquarius-horoscope-zodiac-fortune.png", subtitle: 'Innovative, Idealistic, Humanitarian' },
    { title: "PISCES", image: "/Assets/pisces-horoscope-astrology-zodiac.png", subtitle: 'Empathetic, Imaginative, Gentle' },
];


  const [showAll, setShowAll] = useState(false);

  const handleToggleShow = () => {
    setShowAll(!showAll);
  };


  const [activeIndex, setActiveIndex] = useState(null);

  const handleBoxClick = (index) => {
    setActiveIndex(index);
    setSelectedBoxside(boxestitle[index]);
  };
// horspcope modal
const [show, setShow] = useState(false);



const [selectedBox, setSelectedBox] = useState({ title: '', image: '' });
const [selectedBoxside, setSelectedBoxside] = useState(boxestitle[0]);

const handleClose = () => setShow(false);
const handleShow = (box) => {
  setSelectedBox(box);
  setShow(true);
};

const [showModalbook, setShowModalbook] = useState(false);


// Api for monthly horoscope_data
  
const boxes = [
  { title: "Aries", image: "/Assets/aries.png" },
  { title: "Taurus", image: "/Assets/taurus.png" },
  { title: "Gemini", image: "/Assets/gemini.png" },

  { title: "Cancer", image: "/Assets/cancer.png"},
  { title: "Leo", image: "/Assets/Leo.png"},
  { title: "Virgo", image: "/Assets/Virgo.png"},
  { title: "Libra", image: "/Assets/Libra.png"},
  { title: "Scorpio", image: "/Assets/Scorpio.png"},
  { title: "Capricorn", image: "/Assets/cap.png"},
  { title: "Aquarius", image: "/Assets/aqu.png" },
  { title: "Pisces", image: "/Assets/pis.png" },
  { title: "Sagittarius", image: "/Assets/sag.png" },
];



const [horoscopeData, setHoroscopeData] = useState(null);

const fetchHoroscopeData = async () => {
  if (selectedBox) {
    try {
      const response = await axios.get(`https://lunarsenterprises.com:5005/jyothisham/monthly/horoscope?sign_name=${selectedBox.title.toLowerCase()}`);
      setHoroscopeData(response.data.data);
      console.log(response.data); // Log the complete response to see the structure
    } catch (error) {
      console.error('Error fetching horoscope data:', error);
    }
  }
};

useEffect(() => {
  fetchHoroscopeData();
  
  // Cleanup function to reset the horoscopeData when the component unmounts
  return () => setHoroscopeData(null);
}, [selectedBox]);


// Api for Love horoscope_data

const boxestonelove = [
  { title: "Aries", image: '/Assets/aries.png' },
  { title: "Taurus", image: "/Assets/taurus.png" },
  { title: "Gemini", image: "/Assets/gemini.png" },
  { title: "Cancer", image: "/Assets/cancer.png"},
  { title: "Leo", image: "/Assets/Leo.png"},
  { title: "Virgo", image: "/Assets/Virgo.png"},
  { title: "Libra", image: "/Assets/Libra.png"},
  { title: "Scorpio", image: "/Assets/Scorpio.png"},
  { title: "Capricorn", image: "/Assets/cap.png"},
  { title: "Aquarius", image: "/Assets/aqu.png" },
  { title: "Pisces", image: "/Assets/pis.png" },
  { title: "Sagittarius", image: "/Assets/sag.png" },
];


const [selectedImage, setSelectedImage] = useState('');
const [selectedImagefemale, setSelectedImagefemale] = useState('');
const [selectedBoy, setSelectedBoy] = useState('');
const [selectedGirl, setSelectedGirl] = useState('');
const [LovehoroscopeData, setLoveHoroscopeData] = useState(null);

const handleShowlov = (box) => {
  setSelectedImage(box ? box.image : '');
  setSelectedBoy(box ? box.title : '');
};

const handleShowlovfemale = (box) => {
  setSelectedImagefemale(box ? box.image : '');
  setSelectedGirl(box ? box.title : '');
};

const [result, setResult] = useState('');
const Loveresponse = async () => {
  if (selectedBoy && selectedGirl) {
    setResult(true)
    try {
      const response = await axios.get(`https://lunarsenterprises.com:5005/jyothisham/signmatch/calculator?boy=${selectedBoy}&girl=${selectedGirl}`);
      setLoveHoroscopeData(response.data);
     
      console.log(response.data);
     
      setResult(false)
    } catch (error) {
      console.error(error);
      
    }
  }


};


const renderContent = () => {
  switch (activeIndex) {
    case 1:
      return (
        <div>
        <div className='scrollable-container'>
          <div className="box-gridlove">
          
            <div className="box">
          
              <img
                src={selectedImage ||'/Assets/gemini.png'}
                alt="boxtitle"
                className="box-image"
              />
            </div>
            
            
            <div className="box">
              <img
                src={selectedImagefemale || '/Assets/aries.png'}
                alt="boxtitle"
                className="box-image"
              />
            </div>
          <div>
<h6>Male </h6>
          </div>
          <div>
          <h6>Female </h6>
                    </div>
          
            <div className='d-flex justify-content-center'>
              <select 
              className="selectlove"
              
              onChange={(e) => handleShowlov(boxestonelove.find(box => box.title === e.target.value))}>
                <option value="">Select a zodiac sign</option>
                {boxestonelove.map((box, index) => (
                  <option key={index} value={box.title}>{box.title}</option>
                ))}
              </select>
              
            </div>
          
            <div className='d-flex justify-content-center'>
           
              <select
              className="selectlove"

              onChange={(e) => handleShowlovfemale(boxestonelove.find(box => box.title === e.target.value))}>
                <option value="">Select a zodiac sign</option>
                {boxestonelove.map((box, index) => (
                  <option key={index} value={box.title}>{box.title}</option>
                ))}
              </select>
            </div>
          </div>
        </div>


        <div className="buttonstylelove mt-3">
        { result ? (

          <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        ) :(
          <div>

          {LovehoroscopeData && (
            <div>
              <div><h6>Male Name : {LovehoroscopeData.data.sname}</h6> </div>
              <div><h6>Female Name : {LovehoroscopeData.data.fname}
              </h6></div>
              <div><h6>Percentage : {LovehoroscopeData.data.percentage}%</h6></div>
              <div> <h6>{LovehoroscopeData.data.result} <i class="fa-solid fa-heart redlove"></i></h6></div>
            </div>
          )}
          </div>
        )}
        
        
        </div>
        
        <div className="buttonstylelove mt-5">
        <Button  onClick={Loveresponse}>
          Love Matching
        </Button>
        </div>
     
      </div>
      );
    case 2:
      return (
        <div className='scrollable-container'>
        <div className="box-grid  ">
        {boxestone.map((box, index) => (
          <div className="box" key={index}  onClick={() => handleShow(box)}>
            <img
              src={box.image}
              alt={box.title}
              className="box-image"
            />
            <h3 className="Handlee">{box.title}</h3>
          </div>
        ))}
      </div>
      </div>
      );
    default:
      return (
        <>


        <div className='scrollable-container'>
        <div className="box-grid  ">
        {boxes.map((box, index) => (
          <div className="box" key={index}  onClick={() => handleShow(box)}>
            <img
              src={box.image}
              alt={box.title}
              className="box-image"
            />
            <h3 className="Handlee">{box.title}</h3>
          </div>
        ))}
      </div>
      </div>

      </>

      )
      
      
  }
};

  return (
    <>
      <Head>
        <title>Astro</title>
      </Head>
      {/* Hero banner design */}

      <br />
      <br />
      <br />

     


      <div className="herobanner  ">
        <div className="container align-items-center justify-content-center d-flex">
          <div className="col-12   align-items-center justify-content-center d-flex  ">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              
          <h1>{t('YOUR PATH TO UNDERSTANDING ZODIAC')}</h1>
              

              <p className='bannersub'>
       {t('Dive into the mystical world of astrology and discover the secrets written in the stars.Our experts provide insights and guidance based on your unique astrological profile.')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className=" bgcolor  ">
        <div className="container   ">
<div className='hidelotus'>

          <div className="row gap-4 hidelotus">
            <div className="col-md-2  ">
              <div className="   align-items-center justify-content-center d-flex">
                <img
                  src="/Assets/god.png"
                  className="serviceselimanate"
                  alt="Description"
                />
              </div>
              <p className=" Nameserv align-items-center justify-content-center d-flex mt-3">
               {t('LOOPKAD')} 
              </p>
            </div>
            <div className="col-md-2  ">
              <div className="   align-items-center justify-content-center d-flex">
                <img
                  src="/Assets/sun.png"
                  className="serviceselimanate"
                  alt=" Description"
                />
              </div>
              <p className="Nameserv align-items-center justify-content-center d-flex mt-3">
                
                {t('SUNSHINE')}
              </p>
            </div>
            <div className="col-md-2  ">
              <div className="align-items-center justify-content-center d-flex ">
                <img
                  src="/Assets/horseshoe.png"
                  className="serviceselimanate"
                  alt="Description"
                />
              </div>
              <p className="Nameserv align-items-center justify-content-center d-flex mt-3">
                {t('URNAME')}
              </p>
            </div>
            <div className="col-md-2  ">
              <div className="align-items-center justify-content-center d-flex ">
                <img
                  src="/Assets/lotus.png"
                  className="serviceselimanate"
                  alt="Description"
                />
              </div>
              <p className="Nameserv align-items-center justify-content-center d-flex mt-3">
                  {t('LOTUSIN')}
              </p>
            </div>
            <div className="col-md-2  ">
              <div className="align-items-center justify-content-center d-flex ">
                <img
                  src="/Assets/peace.png"
                  className="serviceselimanate"
                  alt="Description"
                />
              </div>
              <p className="Nameserv align-items-center justify-content-center d-flex mt-3">
                
                 {t('GEARING')}
              </p>
            </div>
          </div>
          </div>
 {/* Servicesmobile */}

 <div className='hidelo'>

          <div className="row">
          <div className="col-4  ">
          <div className="   align-items-center justify-content-center d-flex">
            <img
              src="/Assets/god.png"
              className="serviceselimanate"
              alt="Description"
            />
          </div>
          <p className=" Nameserv align-items-center justify-content-center d-flex mt-3">
             {t('LOOPKAD')} 
          </p>
        </div>
         
            <div className="col-4  ">
              <div className="   align-items-center justify-content-center d-flex">
                <img
                  src="/Assets/sun.png"
                  className="serviceselimanate"
                  alt="Description"
                />
              </div>
              <p className="Nameserv align-items-center justify-content-center d-flex mt-3">
                 {t('SUNSHINE')}
              </p>
            </div>
            <div className="col-4 ">
              <div className="align-items-center justify-content-center d-flex ">
                <img
                  src="/Assets/horseshoe.png"
                  className="serviceselimanate"
                  alt="Description"
                />
              </div>
              <p className="Nameserv align-items-center justify-content-center d-flex mt-3">
              {t('URNAME')}
              </p>
            </div>
         
        
          </div>



          <div className="row">
         
         
           
          
            <div className="col-6  ">
              <div className="align-items-center justify-content-center d-flex ">
                <img
                  src="/Assets/lotus.png"
                  className="serviceselimanate"
                  alt="Description"
                />
              </div>
              <p className="Nameserv align-items-center justify-content-center d-flex mt-3">
                {t('LOTUSIN')}
              </p>
            </div>
            <div className="col-6  ">
              <div className="align-items-center justify-content-center d-flex ">
                <img
                  src="/Assets/peace.png"
                  className="serviceselimanate"
                  alt="Description"
                />
              </div>
              <p className="Nameserv align-items-center justify-content-center d-flex mt-3">
                {t('GEARING')}
              </p>
            </div>
          </div>

          </div>

          

          

          <div className="mt-5 hidelotus">
          <div className='col-8'>
          <h1 className="text-center mb-3">{selectedBoxside.title}</h1>
          </div>
            <div className="row">
              <div className="col-8">
              <div className="content-display">{renderContent()}</div>
             
              </div>
              <div className="col-4   ">
                <div className="box-gridtitle">
                  {boxestitle.map((box, index) => (
                    <div
                      className={`boxtitle ${
                        activeIndex === index ? "active" : ""
                      }`}
                      key={index}
                       onClick={() => handleBoxClick(index)}

                    
                    >
                      <i
                        className={`far fa-dot-circle circleicin ${
                          activeIndex === index
                            ? "active"
                            : "fa-regular fa-circle"
                        }`}
                        aria-hidden="true"
                      ></i>
                      <p
                      className='daliyenp'
                        style={{
                          color: activeIndex === index ? "green" : "black",
                        }}
                      >
                        {box.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


          <div className="mt-5  hidelo">
          <div className='col-12'>
          <h1 className="text-center mb-3">{selectedBoxside.title}</h1>
          </div>
            <div className="row">
              <div className="col-12">
              <div className="content-display">{renderContent()}</div>
             
              </div>
              <div className="col-md-4   mt-5 ">
                <div className="box-gridtitle">
                  {boxestitle.map((box, index) => (
                    <div
                      className={`boxtitle ${
                        activeIndex === index ? "active" : ""
                      }`}
                      key={index}
                       onClick={() => handleBoxClick(index)}

                    
                    >
                      <i
                        className={`far fa-dot-circle circleicin ${
                          activeIndex === index
                            ? "active"
                            : "fa-regular fa-circle"
                        }`}
                        aria-hidden="true"
                      ></i>
                      <p
                      className='daliyenp'
                        style={{
                          color: activeIndex === index ? "green" : "black",
                        }}
                      >
                        {box.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>



      <Modal
      centered
      dialogClassName="custom-modal"
      size="lg"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
          <Modal.Title>
          
          
              <img
              src={selectedBox ? selectedBox.image : ''}
            alt={selectedBox ? selectedBox.title : ''}
          className="modal-imag"
          style={{ height:80, }}
        />
          {selectedBox ? selectedBox.title : ''}  (  {horoscopeData && horoscopeData.month})</Modal.Title>
      </Modal.Header>
      <div className="row mt-5 mb-5 m-3">

       <h5> Better Days {horoscopeData && horoscopeData.standout_days}</h5>
      <h5> Challenging Days {horoscopeData && horoscopeData.challenging_days}</h5>
      
 <h6>
{horoscopeData ? horoscopeData.horoscope_data : ''}
        
        </h6>
        <div className="col-8">
     
        </div>
        </div>
    
      <Modal.Footer>
       
        <Button variant="primary" onClick={handleClose}>
          Back
        </Button>
      </Modal.Footer>
    </Modal>



      {/*  Get latest daily zodiac*/}
      <div className="  ">
        <div className="container hidelotus mt-5 mb-5">

        <h1 className=' Zodia'>{t('Get Latest Daily Zodiac Forecast')} <br/>{t('and Analysis for Success')}</h1>
        <div className="col-lg-10 mt-5 container">
        <div className="box-gridZodia">
          {boxeshorcopse.map((box, index) => (
            <div className="boxZodia" key={index} >
              <div className="secboxzodia mt-4">
                <img src={box.image} alt={box.title} className="boximagezodia" />
              </div>
              <h4 className="Zodiahead mt-2">{box.title}</h4>
              <p className="SubZodiahead">{box.subtitle} </p>
            </div>
          ))}
        </div>
        
      </div>

       
      
        </div>





        <div className="container hidelo  mt-5 mb-5">

        <h1 className=' Zodia'>{t('Get Latest Daily Zodiac Forecast')} <br/>{t('and Analysis for Success')}</h1>
        <div className="col-lg-10 mt-5 container">
        <div className="box-gridZodia">
          {boxeshorcopse.map((box, index) => (
            <div className="boxZodia" key={index} >
              <div className="secboxzodia mt-4">
                <img src={box.image} alt={box.title} className="boximagezodia" />
              </div>
              <h4 className="Zodiahead mt-2">{box.title}</h4>
              <p className="SubZodiahead">{box.subtitle} </p>
            </div>
          ))}
        </div>
      </div>

      
      
        </div>

        <div>
         <p className="text-center">{t('We are offer free foracast')}</p>
    <div className='col-12 mb-5 align-items-center justify-content-center d-flex  container'>

    <div className='col-md-8  d-flex' >
                      
                        <input
    
                        className='form-controlew inputbookee'
                          type="email"
                          placeholder="Enter the Email"
                          name="email"
                          // value={formData.email}
                          // onChange={handleChange}
                          required
                        />

                          <div
                            className="custom-buttonsub ">
                         <p>
                              {t('Click to subscription')}
                              </p>
                           
                        </div>
                      </div>
                      </div>
</div>
      {/* Our understanding */}

      <div className=" bgcolorunder  hidelotus">
        <div className="container">

          <div className=" underhorse col-12">
            <h6 className='underhorsesub'>{t('Horoscope')}</h6>
    
            <h1 className='underhorsemain'>{t('understanding Science')}  <br/> {t('of Astrology')}</h1>
            
            <div className="box-gridunder col-12 container mt-5">
      {boxeshorcopseunder.slice(0, showAll ? boxeshorcopseunder.length : 6).map((box, index) => (
        <div className="d-flex col-12 container" key={index}>
          <img src={box.image} alt={box.title} className="boximagezodiaunder" />
          <div className='headingmainunder'>
            <h4 className="titleunder">{box.title}</h4>
            <p className="titleundersub">{box.subtitle}</p>
          </div>
        </div>
        
      ))}
      
     
    </div>
    <div className="text-center  container col-12">
      <button className=" buttonunder" onClick={handleToggleShow}>
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>
      
            
          </div>
        </div>
      </div>
      </div>











 {/* Our understandingmob */}
 <div className=" bgcolorunder hidelo">
 <div className="container ">

   <div className=" underhorse col-12">
     <h6 className='underhorsesub'>{t('Horoscope')}</h6>

     <h1 className='underhorsemain'>{t('understanding Science')}  <br/> {t('of Astrology')}</h1>
     
     <div className="box-gridunder col-12 container mt-5">
{boxeshorcopseunder.slice(0, showAll ? boxeshorcopseunder.length : 6).map((box, index) => (
 <div className=" col-12 " key={index}>
   <img src={box.image} alt={box.title} className="boximagezodiaunder" />
   <div className='headingmainunder'>
     <h6 className="titleunder">{box.title}</h6>
     <p className="titleundersub">{box.subtitle}</p>
   </div>



   
 </div>
 
))}





</div>
<div className="text-center  container col-12">
<button className=" buttonunder" onClick={handleToggleShow}>
 {showAll ? 'Show Less' : 'Show More'}
</button>
</div>

     
   </div>
 </div>
</div>


      {/* {blog} */}

      <div className="bgcolor hidelotusart">
      <div className="container">

      <h1 className=' blog'>{t('Our Articles for you')}</h1>
      <div className="col-lg-12 mt-5 container ">
      <div className="box-gridblog ">
        {boxeshorcopseblog.map((box, index) => (
          <div className=" d-flex " key={index} >
            <div className="secboxblog ">
              <img src={box.image} alt={box.title} className="secboxzodblog" />
            </div>
            <div className='dflexcent'>
            <div className="mainheadingblog">
            <h4 className="Zodiablog mt-2">{box.title}</h4>
            <p className="SubZodiahea">{box.subtitle} </p>
<a href ={box.link}>
            <div className="seemorearticle">

            <p>See More</p>
            </div>
            </a>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
    
      </div>
    </div>



       {/* {blog mob} */}

       <div className="bgcolor hideloart">
       <div className="container">
 
       <h1 className=' blog mt-5'>Our Articles for you</h1>
       <div className="col-lg-10 mt-5 container ">
       <div className="box-gridblog ">
         {boxeshorcopseblog.map((box, index) => (
           <div className=" " key={index} >
             <div className="secboxblog ">
               <img src={box.image} alt={box.title} className="secboxzodblog" />
             </div>
             <div className='dflexcent'>
             <div className="mainheadingblog">
             <h4 className="Zodiablog mt-2">{box.title}</h4>
             <p className="SubZodiahea">{box.subtitle} </p>
             <a href ={box.link}>
            <div className="seemorearticle">

            <p>See More</p>
            </div>
            </a>
             </div>
           </div>
           </div>
         ))}
       </div>
     </div>
     
       </div>
     </div>
    {/* lower services */}


    <div className="hidelotus">
    <div className="container mt-5 mb-5">

    <h1 className=' Zodia'>{t('Innovative Services for Modern Challenges')}</h1>
    <p className="Zodiaser">{t('We combine expertise and creativity to address your unique challenges and deliver impactful solutions.')}</p>
    <div className="col-lg-10 mt-5 container">
    <div className="box-gridZodiaser">
    <div className='row'>
    <div className="col-1"></div>
    <div className='col-5'>

        <div className="boxZodiaser"  >
          <div className="secboxzodiaser ">

          
          
           <img src='/Assets/vasthu.jpg'  className="boximagezodia"  />

<div>

            </div>
          </div>

          <h4 className="Zodiaheadser ">Vasthu</h4>
          <p className="SubZodiaheadser">Spiritual energy flow.</p>

</div>
<div className='col-6'>

</div>
</div>
<div className='col-1'>
   
</div>
<div className='col-5'>
    <h1 className='serside'>{t('Get Latest')}  <br/>{t('Forecast and')} <br/>{t('Analysis for')}<br/> {t('Success')}</h1>
</div>
        </div>
      

        <div className='row'>
        <div className="col-4"></div>
        
        <div className='col-5 servicesstyle'>
    
            <div className="boxZodiaser"  >
              <div className="secboxzodiaser ">
    
              
              
                <img src='/Assets/blog3.jpg'  className="boximagezodia"  />
    
    <div>
    
                </div>
              </div>
    
              <h4 className="Zodiaheadser ">Horoscope Matching</h4>
              <p className="SubZodiaheadser"> Harmony through astrology.   </p>

    </div>
    <div className='col-6'>
    
    </div>
    </div>
            </div>


      

            <div className='row'>
            <div className="col-1"></div>
            
            <div className='col-5 servicesstyle'>
        
                <div className="boxZodiaser"  >
                  <div className="secboxzodiaser ">
        
                  
                  
                    <img src='/Assets/pothutham.webp'  className="boximagezodia"  />
        
        <div>
        
                    </div>
                  </div>
        
                  <h4 className="Zodiaheadser ">Jathakam</h4>
                  <p className="SubZodiaheadser">Marriage is a sacred bond.</p>
        
        </div>
       
        </div>


        <div className="col-1"></div>
            
            <div className='col-5 servicesstyle'>
        
                <div className="boxZodiaser"  >
                  <div className="secboxzodiaser ">
        
                  
                  
                    <img src='/Assets/health.jpg'  className="boximagezodia"  />
        
        <div>
        
                    </div>
                  </div>
        
                  <h4 className="Zodiaheadser ">Health and Astrology</h4>
                  <p className="SubZodiaheadser">Health Problem Solution</p>
        
        </div>
       
        </div>
                </div>
        
        
    </div>
  </div>




  
    </div>
  </div>




<div>
  <div className="container hidelo  mt-5 mb-5">

  <h1 className=' Zodia'>{t('Innovative Services for Modern Challenges')}</h1>
  <p className="Zodiaser">{t('We combine expertise and creativity to address your unique challenges and deliver impactful solutions.')}</p>
        <div className="col-lg-10 mt-5 container">
        <div className="box-gridZodia">
          {boxeshorcopselower.map((box, index) => (
            <div className="boxZodia" key={index} >
              <div className="secboxzodia mt-4">
                <img src={box.image} alt={box.title} className="boximagezodia" />
              </div>
              <h4 className="Zodiahead mt-2">{box.title}</h4>
              <p className="SubZodiahead">{box.subtitle} </p>
            </div>
          ))}
        </div>
      </div>
      </div>
      
      
        </div>






 {/* Booking */}


<div className="bgcolorunder">
            <div className="container">
                <div className="underhorse col-12">
                    <h1 className='underhorsemain'>{t('BOOKING')}</h1>
                    <p className="ZodiaserBook">{t('Schedule your appointment today and start your journey into the world of astrology.')}</p>
                    <form onSubmit={handleSubmit}>
                        <div className="col-12 align-item-center -flex justify-content-center">
                            <div>
                                <div className="row">
                                    <div className='col-6'>
                                        <h6 className='bookname'>First Name</h6>
                                        <input
                                            className='form-control inputbook'
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className='col-6'>
                                        <h6 className='bookname'>Last Name</h6>
                                        <input
                                            className='form-control inputbook'
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Last Name"
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
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            type="email"
                                            placeholder="Enter the Email"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className='col-6'>
                                        <h6 className='bookname'>Services*</h6>
                                        <select ref={selectRef} className="form-control">
                                            <option></option> {/* Placeholder for Select2 */}
                                            {servicesApi.map((option) => (
                                                <option className="optionselect" key={option.value} value={option.value}>
                                                    {option.s_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='col-6'>
                                        <h6 className='bookname'>Date*</h6>
                                        <input
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                            type="date"
                                            className='form-control inputbook'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <h6 className='bookname'>Message (optional)</h6>
                                <input
                                    multiple
                                    type="text"
                                    className='form-control inputbooknsh'
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <Button
                            className="custom-button mt-5"
                            title= {t('Book Now')}
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
                                "Book Now"
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
<Modal 
      centered
      show={showModalbook} onHide={() => setShowModalbook(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t('Your message has been sent successfully.Our team Connect soon')}!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalbook(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
<Testmonial/>
      
    </>
  );
}







