import React, { useEffect, useState } from 'react'
import "@splidejs/react-splide/css";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
export default function Ourteams() {
  const { t } = useTranslation();
  const boxeshorcopse = [
    { title: "Pt Ajai Bhambi", image: "/Assets/pro1.webp"
      ,subtitle:'Lorem ipsum dolor sit amet consec Pellentesque nascetur   . ',
     },
    { title: "Sohini Sastri", image: "/Assets/pro3.jpeg",subtitle:'Lorem ipsum dolor sit amet consec Pellentesque nascetur . ' },
    { title: "Sanjay B Jumaani", image: "/Assets/pro2.jpeg",subtitle:'Lorem ipsum dolor sit amet consec Pellentesque nascetur . ' },

    { title: "Sandeep Kochar", image: "/Assets/pro5.jpg",subtitle:'Lorem ipsum dolor sit amet consec Pellentesque nascetur . '},

    { title: "K n Rao", image: "/Assets/pro4.jpg"
      ,subtitle:'Lorem ipsum dolor sit amet consec Pellentesque nascetur   . ',
     },

 
  ];

  // team api

  useEffect(() => {
    Team()
    
  }, [])
  

  const [teamlist, setteamlist] = useState([])

  const Team = async ( ) => {

    try {

      const Teamresp = await axios.get('https://lunarsenterprises.com:5005/jyothisham/list/team')

      setteamlist(Teamresp.data.data)
      console.log(Teamresp.data, 'Teamresp.data');
      
    } catch (error) {
      
    }
  }

  return (

    
    <>
     {/* Hero banner design */}
       {/* Hero banner design */}
     <div className="herobanner  ">
     <div className="container align-items-center justify-content-center d-flex">
       <div className="col-12   align-items-center justify-content-center d-flex  ">
         <div className="col-12 col-md-6 col-lg-6 col-xl-6">
           <h1>{t('OUR TEAMS')}</h1>

           <p className='bannersub'>
           {t('Dive into the mystical world of astrology and discover the secrets written in the stars.Our experts provide insights and guidance based on your unique astrological profile.')}
             
           </p>
         </div>
       </div>
     </div>
   </div>



   <div  className='scrollable-container'>
  <div className="container   mt-5 mb-5">

  <h1 className=' Zodia'></h1>
  <p className="Zodiaser">  {t('Dive into the mystical world of astrology and discover the secrets written in the stars.Our experts provide insights and guidance based on your unique astrological profile.')}</p>
        <div className="col-lg-12 mt-5 container">
        <div className="box-gridcontact">
          {teamlist?.map((box, index) => (
            <div className="boxZodiateam" key={index} >
              <div className="secboxzodiateam mt-4">
                <img src={`https://lunarsenterprises.com:5005/${box.t_image}`}
                
                alt={box.title} className="boximagezodiateam" />
              </div>
              <h4 className="Zodiaheadteam mt-2">{box.t_name}</h4>
              <p className="SubZodiaheadteam">{box.t_designation} </p>
            </div>
          ))}
        </div>
      </div>
      </div>
      
      
        </div>
        
    </>
  )
}
