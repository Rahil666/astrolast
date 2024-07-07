// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { useTranslation } from "react-i18next";

// const Header = () => {
//   const { t } = useTranslation('common');
//   const router = useRouter();
//   const { locale } = router;

//   const [selectedLocale, setSelectedLocale] = useState(locale);

//   useEffect(() => {
//     setSelectedLocale(locale);
//   }, [locale]);

//   const handleLanguageChange = (e) => {
//     const selectedLanguage = e.target.value;
//     router.push(router.pathname, router.asPath, { locale: selectedLanguage });
//   };

//   const LiveUrl = router.asPath;
//   console.log("router->", LiveUrl);




//   const services = [
//     { name: "Astrology Reading", link: "/services/astrology-reading" },
//     { name: "Birth Chart Analysis", link: "/services/birth-chart-analysis" },
//     { name: "Compatibility Check", link: "/services/compatibility-check" },
//     { name: "Career Guidance", link: "/services/career-guidance" },
//     { name: "Love Prediction", link: "/services/love-prediction" },
//     { name: "Numerology Reading", link: "/services/numerology-reading" },
//     { name: "Personalized Horoscope", link: "/services/personalized-horoscope" },
//     { name: "Tarot Reading", link: "/services/tarot-reading" },
//     { name: "Daily Horoscope", link: "/services/daily-horoscope" },
//     { name: "Yearly Forecast", link: "/services/yearly-forecast" },
//     { name: "Spiritual Counseling", link: "/services/spiritual-counseling" },
//     { name: "Past Life Reading", link: "/services/past-life-reading" },
//     { name: "Transit Predictions", link: "/services/transit-predictions" },
//     { name: "Meditation Guidance", link: "/services/meditation-guidance" },
//     { name: "Vedic Astrology", link: "/services/vedic-astrology" },
//     { name: "Western Astrology", link: "/services/western-astrology" },
//     { name: "Psychic Reading", link: "/services/psychic-reading" },
//     { name: "Astrological Remedies", link: "/services/astrological-remedies" },
//     { name: "Health Astrology", link: "/services/health-astrology" },
//     { name: "Electional Astrology", link: "/services/electional-astrology" },
//     { name: "Mundane Astrology", link: "/services/mundane-astrology" },
//     { name: "Horary Astrology", link: "/services/horary-astrology" },
//     { name: "Gemstone Recommendations", link: "/services/gemstone-recommendations" },
//     { name: "Astrology for Children", link: "/services/astrology-for-children" },
//     { name: "Career Astrology", link: "/services/career-astrology" },
//     { name: "Family Astrology", link: "/services/family-astrology" },
//     { name: "Financial Forecast", link: "/services/financial-forecast" },
//     { name: "Astrological Chart Rectification", link: "/services/astrological-chart-rectification" },
//     { name: "Dream Interpretation", link: "/services/dream-interpretation" },
//     { name: "Astrology Workshops", link: "/services/astrology-workshops" },
//     { name: "Astrology Consultation", link: "/services/astrology-consultation" },
//     { name: "Karmic Astrology", link: "/services/karmic-astrology" },
//     { name: "Astrology for Businesses", link: "/services/astrology-for-businesses" },
//     { name: "Astrology for Couples", link: "/services/astrology-for-couples" },
//     { name: "Solar Return Chart Reading", link: "/services/solar-return-chart-reading" },
//     { name: "Lunar Return Chart Reading", link: "/services/lunar-return-chart-reading" },
//     { name: "Astrology for Personal Growth", link: "/services/astrology-for-personal-growth" },
//     { name: "Astrology for Relocation", link: "/services/astrology-for-relocation" },
//     { name: "Astrological Compatibility", link: "/services/astrological-compatibility" },
//     { name: "Astrology for Success", link: "/services/astrology-for-success" },
//     { name: "Astrology for Relationships", link: "/services/astrology-for-relationships" },
//     { name: "Astrology for Education", link: "/services/astrology-for-education" },
//     { name: "Career Transition Astrology", link: "/services/career-transition-astrology" },
//     { name: "Astrology for New Beginnings", link: "/services/astrology-for-new-beginnings" },
//     { name: "Astrology for Health and Wellness", link: "/services/astrology-for-health-wellness" },
//     { name: "Astrology for Financial Planning", link: "/services/astrology-for-financial-planning" },
//     { name: "Astrology for Life Decisions", link: "/services/astrology-for-life-decisions" },
//     { name: "Astrology for Spiritual Growth", link: "/services/astrology-for-spiritual-growth" },
//     { name: "Astrology for Self-Discovery", link: "/services/astrology-for-self-discovery" },
//     { name: "Astrology for Relationship Healing", link: "/services/astrology-for-relationship-healing" },
//     { name: "Astrology for Emotional Healing", link: "/services/astrology-for-emotional-healing" },
//     { name: "Astrology for Personal Development", link: "/services/astrology-for-personal-development" },
//     { name: "Astrology for Life Path Guidance", link: "/services/astrology-for-life-path-guidance" },
//     { name: "Astrology for Understanding Life Challenges", link: "/services/astrology-for-understanding-life-challenges" },
//     { name: "Astrology for Finding Purpose", link: "/services/astrology-for-finding-purpose" },
//     { name: "Astrology for Inner Peace", link: "/services/astrology-for-inner-peace" },
//     { name: "Astrology for Goal Setting", link: "/services/astrology-for-goal-setting" },
//     { name: "Astrology for Manifestation", link: "/services/astrology-for-manifestation" }
//   ];
  
//   return (
//     <nav className="head-footer-bg sticky-header navbar navbar-expand-lg" id="customnavbar">
//     <div className="container">
   
//         <a className="navbar-brand">
//           <img src="/Assets/logoabc.png" className="logoabc" alt="Logo" />
//         </a>
    
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item">
//                       <a className={`nav-link ${LiveUrl === "/" ? "active" : ""}`}>Home</a>
          
//           </li>
//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
//             <ul className="dropdown-menu">
//               {services.map((service, index) => (
//                 <li key={index}>
//                   <Link href={service.link} passHref>
//                     <a className="dropdown-item">{service.name}</a>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </li>
//           <li className="nav-item">
      
//               <a className={`nav-link ${LiveUrl === "/blogs/blogs" ? "active" : ""}`}>Blog</a>
            
//           </li>
//           <li className="nav-item">
          
//               <a className={`nav-link ${LiveUrl === "/ourteam" ? "active" : ""}`}>Our Team</a>
            
//           </li>
//           <li className="nav-item">
          
//               <a className={`nav-link ${LiveUrl === "/contact" ? "active" : ""}`}>Contact Us</a>
        
//           </li>
//           <li className="nav-item">
//             <div className="nav-link">
//               <select id="exampleSelect" name="options" className="bordernone" value={selectedLocale} onChange={handleLanguageChange}>
//                 <option value="en">English</option>
//                 <option value="kn">Kannada</option>
//                 <option value="hi">Hindi</option>
//               </select>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>

//   );
// }
// export default Header;