import React, { useState, useEffect } from 'react';
import { FaRegCommentAlt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Blog = () => {
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState({});
  const [showCommentInput, setShowCommentInput] = useState(null);
  const { t } = useTranslation();

  const baseUrl = 'https://lunarsenterprises.com:5005/'; 

  const [boxeshorcopseblogmain, setboxeshorcopseblogmain] = useState([]);

  const Bloglist = async () => {
    try {
      const Blogresp = await axios.get(`${baseUrl}jyothisham/list/blog`);
      setboxeshorcopseblogmain(Blogresp.data.data);  
      console.log(Blogresp.data.data, 'Blogresp.data');
    } catch (error) {
      console.error('Error fetching blog list:', error);  
    }
  };

  useEffect(() => {
    Bloglist();  // Ensure Bloglist is called
  }, []);

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
              {boxeshorcopseblogmain.map((box, index) => {
                const mediaUrl = `${baseUrl}${box.b_source}`;
                console.log(mediaUrl); // Log the formed URL

                return (
                  <div key={index}>
                    <div className="boxZodiablogmain">
                      <div className="secboxzodiablog   mt-4">
                        {box.b_type === "image" && (
                          <img src={mediaUrl} alt={box.b_title} className="boximagezodiablog" />
                        )}
                        {box.b_type  === "video" && (
                          <video controls className="boxvideozodiablog">
                            <source src={mediaUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )}
                        {box.b_type  === "text" && (
<div >
                          <h5>{box.b_source}</h5>
                          </div>
                        )}
                      </div>
                      <p className="SubZodiablogmain">{box.b_title}</p>
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
                );
              })}
            </div>

            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
