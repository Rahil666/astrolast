
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const { i18n } = useTranslation();

  const [selectedLocale, setSelectedLocale] = useState(i18n.language);

  useEffect(() => {
    const savedLocale = localStorage.getItem('selectedLocale');
    if (savedLocale && savedLocale !== i18n.language) {
      i18n.changeLanguage(savedLocale);
      setSelectedLocale(savedLocale);
    }
  }, [i18n]);

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setSelectedLocale(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem('selectedLocale', newLang);
  };

  const LiveUrl = router.asPath;
  console.log("router->", LiveUrl);



  

 

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

  

  return (
    <nav className="head-footer-bg sticky-header navbar navbar-expand-lg" id="customnavbar">
      <div className="container">
        <a href="/">
          <img src="/Assets/logoabc.png" className="logoabc" alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/" className={`nav-link ${LiveUrl === "/" ? "active" : ""}`}>
                
                {t('Home')}
              </a>
            </li>

            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{t('Services')}</a>
            <ul className="dropdown-menu">
              {servicesApi.map((service, index) => (
                <li key={index}>
                  <a className="dropdown-item" href={`/services/${encodeURIComponent(service.s_name.toLowerCase().replace(/\s+/g, '-'))}`}>
                    {service.s_name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
            <li className="nav-item">
              <a href="/blogs/allblogs" className={`nav-link ${LiveUrl === "/blogs/allblogs" ? "active" : ""}`}>
              {t('Blog')}
              </a>
            </li>
            <li className="nav-item">
              <a href="/ourteam" className={`nav-link ${LiveUrl === "/ourteam" ? "active" : ""}`}>
              {t('Our Team')}
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className={`nav-link ${LiveUrl === "/contact" ? "active" : ""}`}>
              {t('Contact Us')}
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <select id="exampleSelect" name="options" className="bordernone selectlan " value={selectedLocale} onChange={handleLanguageChange}>
                  <option  value="en">English</option>
                  <option value="kn">{t('Kannada')}</option>
                  <option value="hi">{t('Hindi')}</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
