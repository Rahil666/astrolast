// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcomeMessage: 'Welcome to our website!',
      contactUs: 'Contact Us',
      aboutUs: 'About Us',
      "YOUR PATH TO UNDERSTANDING ZODIAC": "YOUR PATH TO UNDERSTANDING ZODIAC",
      "Dive into the mystical world of astrology and discover the secrets written in the stars. Our experts provide insights and guidance based on your unique astrological profile.":"Dive into the mystical world of astrology and discover the secrets written in the stars. Our experts provide insights and guidance based on your unique astrological profile.",
      Home:"Home",
      "Services":"Services",
      "Blog":"Blog",
      "Our Team":"Our Team",
      "Contact Us":"Contact Us",
      "Kannada":"Kannada",
      "Hindi":"Hindi",
      "LOOPKAD":"LOOPKAD",
      "SUNSHINE":"SUNSHINE",
      "URNAME":"URNAME",
      "LOTUSIN":"LOTUSIN",
      "GEARING":" GEARING",
      "Get Latest Daily Zodiac Forecast and Analysis for Success":"Get Latest Daily Zodiac Forecast and Analysis for Success",
      "Get Latest Daily Zodiac Forecast":"Get Latest Daily Zodiac Forecast",
      "and Analysis for Success": "and Analysis for Success",
      "We are offer free foracast": "We offer free forecast",
      "Click to subscription": "Click to Subscribe",
      "Horoscope": "Horoscope",
      "understanding Science": "Understanding Science",
      "of Astrology": "of Astrology",
      "Our Articles for you": "Our Articles for You",
      "Innovative Services for Modern Challenges":"Innovative Services for Modern Challenges",
      "We combine expertise and creativity to address your unique challenges and deliver impactful solutions.":"We combine expertise and creativity to address your unique challenges and deliver impactful solutions.",
      "Get Latest":"Get Latest",
      "Forecast and":"Forecast and",
      "Success":"Success",
      "Analysis for":"Analysis for",
      "BOOKING":"BOOKING",
      "Book Now":"Book Now",
      "Your message has been sent successfully.Our team Connect soon":"Your message has been sent successfully.Our team Connect soon",
      "Testimonials":"Testimonials",
      "OUR BLOGS":"OUR BLOGS",
      "OUR TEAMS":"OUR TEAMS"
      
    }
  },
  kn: {
    translation: {
      "BOOKING":"ಬುಕ್ಕಿಂಗ್",
      "YOUR PATH TO UNDERSTANDING ZODIAC": "ನಿಮ್ಮ ರಾಶಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ನಿಮ್ಮ ಮಾರ್ಗ",
 "Dive into the mystical world of astrology and discover the secrets written in the stars.Our experts provide insights and guidance based on your unique astrological profile.": "ಜ್ಯೋತಿಷ್ಯದ ರಹಸ್ಯಮಯ ಜಗತ್ತಿನಲ್ಲಿ ಮುಳುಗಿ, ನಕ್ಷತ್ರಗಳಲ್ಲಿ ಬರೆದಿರುವ ರಹಸ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ. ನಿಮ್ಮ ವಿಶಿಷ್ಟ ಜ್ಯೋತಿಷ್ಯ ಪ್ರೊಫೈಲ್ ಆಧಾರಿತವಾಗಿ ನಮ್ಮ ತಜ್ಞರು ಒಳನೋಟ ಮತ್ತು ಮಾರ್ಗದರ್ಶನವನ್ನು ಒದಗಿಸುತ್ತಾರೆ.",
      "Home":"ಮನೆ",
      "Services":"ಸೇವೆಗಳು",
      "Blog":"ಬ್ಲಾಗ್",
      "Our Team":"ನಮ್ಮ ತಂಡ",
      "Contact Us":"ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
      "Kannada":"ಕನ್ನಡ",
      "Hindi":"ಹಿಂದಿ",
      "LOOPKAD": "ಲೂಪ್‌ಕಾಡ್",
      "SUNSHINE": "ಸನ್‌ಶೈನ್",
      "URNAME": "ಯೂರ್‌ನೇಮ್",
      "LOTUSIN": "ಲೋಟಸಿನ್",
      "GEARING": "ಗಿಯರಿಂಗ್",
      "Get Latest Daily Zodiac Forecast and Analysis for Success": "ಇತ್ತೀಚಿನ ದೈನಂದಿನ ರಾಶಿ ಭವಿಷ್ಯವಾಣಿ ಮತ್ತು ಯಶಸ್ಸಿಗೆ ವಿಶ್ಲೇಷಣೆ ಪಡೆಯಿರಿ",
      "Get Latest Daily Zodiac Forecast":"ಇತ್ತೀಚಿನ ದೈನಂದಿನ ರಾಶಿ ಭವಿಷ್ಯವಾಣಿ ಪಡೆಯಿರಿ",
      "and Analysis for Success": "ಮತ್ತು ಯಶಸ್ಸಿಗೆ ವಿಶ್ಲೇಷಣೆ",
      "We are offer free foracast": "ನಾವು ಉಚಿತ ಭವಿಷ್ಯವಾಣಿ ಒದಗಿಸುತ್ತೇವೆ",
      "Click to subscription": "ಸಬ್ಸ್ಕ್ರೈಬ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
       "Horoscope": "ರಾಶಿ ಫಲ",
       "understanding Science": "ವಿಜ್ಞಾನವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
       "of Astrology": "ಜ್ಯೋತಿಷ್ಯದ",
       "Our Articles for you": "ನಮ್ಮ ಲೇಖನಗಳು ನಿಮ್ಮಿಗಾಗಿ",
       "Innovative Services for Modern Challenges":"ಆಧುನಿಕ ಸವಾಲುಗಳಿಗಾಗಿ ನಾವೀನ್ಯತೆಯ ಸೇವೆಗಳು",
       "We combine expertise and creativity to address your unique challenges and deliver impactful solutions.":"ಆಧುನಿಕ ಸವಾಲುಗಳಿಗಾಗಿ ನಾವೀನ್ಯತೆಯ ಸೇವೆಗಳು",
       "Get Latest":"ಹೊಸ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಿರಿ",
       "Forecast and":"ಮೂಡಲ್ವಾರಿ ಮತ್ತು",
       "Success":"ಯಶಸ್ಸು",
       "Analysis for": "ನಿಖರವಾದ ವಿಶ್ಲೇಷಣೆ",
       "Book Now":"ಈಗ ಬುಕ್ ಮಾಡಿ",
       "Schedule your appointment today and start your journey into the world of astrology.":"ಇಂದು ನಿಮ್ಮ ನೇಮಕಾತಿಯನ್ನು ಶೆಡ್ಯೂಲ್ ಮಾಡಿ ಮತ್ತು ಜ್ಯೋತಿಷ್ಯದ ಜಗತ್ತಿನಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿ.",
       "Your message has been sent successfully.Our team Connect soon":"ನಿಮ್ಮ ಸಂದೇಶವು ಯಶಸ್ವಿಯಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ. ನಮ್ಮ ತಂಡ ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕ साधಿಸುತ್ತದೆ.",
       "Testimonials":"ಶ್ರೇಯಾಂಕಗಳು",
       "OUR BLOGS":"ನಮ್ಮ ಬ್ಲಾಗ್‌ಗಳು",
       "OUR TEAMS":"ನಮ್ಮ ತಂಡಗಳು"
    }
  },
  hi: {
    translation: {
      "Schedule your appointment today and start your journey into the world of astrology.":"आज ही अपनी अपॉइंटमेंट बुक करें और ज्योतिष के संसार में अपनी यात्रा शुरू करें।"
     
      ,"BOOKING": "बुकिंग",
      "Analysis for":"विश्लेषण के लिए",
      "YOUR PATH TO UNDERSTANDING ZODIAC": "ज्योतिष को समझने का मार्ग",
      "Dive into the mystical world of astrology and discover the secrets written in the stars.Our experts provide insights and guidance based on your unique astrological profile.": "ज्योतिष की रहस्यमयी दुनिया में गोता लगाएं और सितारों में लिखे रहस्यों की खोज करें। हमारे विशेषज्ञ आपकी अनूठी ज्योतिषीय प्रोफ़ाइल के आधार पर अंतर्दृष्टि और मार्गदर्शन प्रदान करते हैं।",
      "Home":"होम",
      "Services":"सेवाएं",
      "Blog":"ब्लॉग",
      "Our Team":"हमारी टीम",
      "Contact Us":"हमसे संपर्क करें",
      "Kannada":"कन्नड़",
      "Hindi":"हिंदी",
      "LOOPKAD": "लूपकाड",
      "SUNSHINE": "सनशाइन",
      "URNAME": "योरनेम",
      "LOTUSIN": "लोटसिन",
      "GEARING": "गियरिंग",
      "Get Latest Daily Zodiac Forecast and Analysis for Success": "नवीनतम दैनिक राशि पूर्वानुमान और सफलता के लिए विश्लेषण प्राप्त करें",
      "Get Latest Daily Zodiac Forecast": "नवीनतम दैनिक राशि पूर्वानुमान प्राप्त करें",
      "and Analysis for Success": "और सफलता के लिए विश्लेषण",
      "We are offer free foracast": "हम मुफ्त भविष्यवाणी की पेशकश करते हैं",
      "Click to subscription": "सदस्यता लेने के लिए क्लिक करें",
      "Horoscope": "राशिफल",
      "understanding Science": "विज्ञान को समझना",
      "of Astrology": "ज्योतिष का",
      "Our Articles for you": "हमारे लेख आपके लिए",
      "Innovative Services for Modern Challenges":"आधुनिक चुनौतियों के लिए नवीनतम सेवाएं",
      "We combine expertise and creativity to address your unique challenges and deliver impactful solutions.":"हम आपकी विशिष्ट चुनौतियों का समाधान करने और प्रभावशाली समाधान प्रदान करने के लिए विशेषज्ञता और रचनात्मकता को एक साथ लाते हैं।",
      "Get Latest": "ताज़ा जानकारी प्राप्त करें",
      "Forecast and":"पूर्वानुमान और",
      "Success":"सफलता",
      "Book Now":"अभी बुक करें",
      "Your message has been sent successfully.Our team Connect soon":"आपका संदेश सफलतापूर्वक भेज दिया गया है। हमारी टीम जल्द ही आपसे संपर्क करेगी।",
      "Testimonials":"प्रशंसापत्र",
      "OUR BLOGS":" हमारे ब्लॉग्स",
      "OUR TEAMS":"हमारी टीमें"
    }
  }
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en', // default language
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});

export default i18n;