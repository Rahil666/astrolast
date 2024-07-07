import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useTranslation } from 'react-i18next';
export default function Testmonial() {
  const { t } = useTranslation();
  return (
    <div className='section solution-slider'>
    <div className='container'>
      <div className='section-slider'>
        
        <h5>
       {t('Testimonials')}</h5>
        <div className='space5'></div>
        <Splide
                    options={{
                        perPage: 4,
                        breakpoints: {
                            991: {
                                perPage: 3,
                            },
                            767: {
                                perPage: 2,
                            },
                            640: {
                                perPage: 1,
                            },
                        },
                        rewind: true,
                        autoplay: true,
                        interval: 6000,
                        // type: 'fade',
                        // speed: 2200
                    }}
                    aria-label="customList">
        



                    <SplideSlide>
                    <div className="solution-item">
                      <img src="/Assets/pro1.webp" alt="partners_logo" className="img-responsive" />
                      <div className='solu-heading-tag'>Pt Ajai Bhambi</div>
                      <div className="review-para  pt-2 ">
                      <p>Alex's astrological expertise is impressive. He provided detailed and accurate readings. His guidance has been immensely helpful in my personal and professional life. He is kind, patient, and very knowledgeable. Excellent service!</p>
                      </div>
                    </div>
                  </SplideSlide>
                 

                    <SplideSlide>
                    <div className="solution-item">
                      <img src="/Assets/pro3.jpeg" alt="partners_logo" className="img-responsive" />
                      <div className='solu-heading-tag'>Sohini Sastri</div>
                      <div className="review-para  pt-2 ">
                      <p>Sohini is an amazing astrologer. She provided insightful guidance that helped me navigate my career path. Her predictions were spot on and extremely helpful. I highly recommend her services. Truly exceptional experience!</p>
  
                      </div>
                    </div>
                  </SplideSlide>
                  

                    
                    <SplideSlide>
                    <div className="solution-item">
                      <img src="/Assets/pro2.jpeg" alt="partners_logo" className="img-responsive" />
                      <div className='solu-heading-tag'>Sanjay B Jumaani</div>
                      <div className="review-para  pt-2 ">
                      <p>John's advice has been invaluable. His understanding of astrology is profound. He helped me understand complex life situations. His readings are clear and accurate. I am very grateful for his guidance.</p>
                      </div>
                    </div>
                  </SplideSlide>
 



                    <SplideSlide>
                    <div className="solution-item">
                      <img src="/Assets/pro5.jpg" alt="partners_logo" className="img-responsive" />
                      <div className='solu-heading-tag'>Sandeep Kochar</div>
                      <div className="review-para  pt-2">
                      <p>Jane's astrological readings have been a game-changer for me. She is compassionate and insightful. Her predictions have been remarkably accurate. She offers practical advice that is easy to follow. Highly recommend!</p>
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                  <div className="solution-item">
                    <img src="/Assets/pro1.webp" alt="partners_logo" className="img-responsive" />
                    <div className='solu-heading-tag'>Pt Ajai Bhambi</div>
                    <div className="review-para  pt-2 ">
                    <p>Alex's astrological expertise is impressive. He provided detailed and accurate readings. His guidance has been immensely helpful in my personal and professional life. He is kind, patient, and very knowledgeable. Excellent service!</p>
                    </div>
                  </div>
                </SplideSlide>

                </Splide>
      </div>
    </div>
  </div>
  )
}
