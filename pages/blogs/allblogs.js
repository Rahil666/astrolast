import React, { useState, useEffect } from 'react';
import { FaRegCommentAlt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
const Blog = () => {
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState({});
  const [showCommentInput, setShowCommentInput] = useState(null);
  const { t } = useTranslation();

  const boxeshorcopseblogmain = [
    { title: "Name 1", type: "image", source: "/Assets/blog1.", subtitle: 'Lorem ipsum dolor sit.' },
    { title: "Name 2", type: "video", source: "/Assets/WhatsAppvido.mp4", subtitle: 'Lorem ipsum dolor sit.' },
    { title: "Name 3", type: "image", source: "/Assets/two.png", subtitle: 'Lorem ipsum dolor sit.' },
    { title: "Name 4", type: "image", source: "/Assets/three.png", subtitle: 'Lorem ipsum dolor sit.' },
    { title: "Name 5", type: "video", source: "/Assets/secvid.mp4", subtitle: 'm ipsum dolor sit.' },
    { title: "Name 6", type: "image", source: "/Assets/one.png", subtitle: 'Lorem ipsum dolor sit.' },
  ];
  

  const addComment = (boxIndex, text) => {
    const newComment = { boxIndex, text, date: new Date() };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  const getDaysAgo = (date) => {
    const now = new Date();
    const diffTime = Math.abs(now - new Date(date));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    const filteredComments = storedComments.filter(comment => getDaysAgo(comment.date) <= 7);
    setComments(filteredComments);
    localStorage.setItem('comments', JSON.stringify(filteredComments));
  }, []);

  const toggleComments = (boxIndex) => {
    setShowAllComments(prevState => ({
      ...prevState,
      [boxIndex]: !prevState[boxIndex]
    }));
  };

  const toggleCommentInput = (boxIndex) => {
    setShowCommentInput(prevState => (prevState === boxIndex ? null : boxIndex));
  };

  return (
    <>
      <div className="herobanner">
        <div className="container align-items-center justify-content-center d-flex">
          <div className="col-12 align-items-center justify-content-center d-flex">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <h1>{t('OUR BLOGS')}</h1>
              <p className='bannersub'>
              {t('Dive into the mystical world of astrology and discover the secrets written in the stars.Our experts provide insights and guidance based on your unique astrological profile.')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className="container mt-5 mb-5">
          <h1 className='Zodia'></h1>
          <p className="Zodiaser">
          {t('Dive into the mystical world of astrology and discover the secrets written in the stars.Our experts provide insights and guidance based on your unique astrological profile.')}
          </p>
          <div className="col-lg-12 mt-5 container">
            <div className="box-gridblogmain">
              {boxeshorcopseblogmain.map((box, index) => (
                <div key={index}>
                  <div className="boxZodiablogmain">
                    <div className="secboxzodiablog mt-4">
                    {box.type === "image" ? (
                      <img src={box.source} alt={box.title} className="boximagezodiablog" />
                    ) :( <video controls className="boxvideozodiablog">
                      <source src={box.source} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                    </div>
                    <p className="SubZodiablogmain">{box.subtitle}</p>
                    <div className='stylesblog'>
                      <p className='' onClick={() => toggleCommentInput(index)}>
                        <FaRegCommentAlt /> {' '}Comments <span>{comments.filter(comment => comment.boxIndex === index).length}</span>
                      </p>
                      <div className=''>
                        {comments.filter(comment => comment.boxIndex === index).slice(0, showAllComments[index] ? comments.length : 1).reverse().map((comment, commentIndex) => (
                          <p className='Seemorebutton' key={commentIndex}>
                            {comment.text} - {getDaysAgo(comment.date)} days ago {' '}
                          </p>
                        ))}
                        {comments.filter(comment => comment.boxIndex === index).length > 1 && (
                          <div className='Seemorebu' onClick={() => toggleComments(index)}>
                            {showAllComments[index] ? 'Show Less' : 'See More'}
                          </div>
                        )}
                      </div>
                    </div>
                    {showCommentInput === index && (
                      <input
                        className='inputstyleblog'
                        type="text"
                        placeholder="Add a comment"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && e.target.value) {
                            addComment(index, e.target.value);
                            e.target.value = '';
                          }
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
