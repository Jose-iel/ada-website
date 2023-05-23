import React from 'react';

const Socials = () => {
  return (
    <ul className='socials'>
      <li>
        <a href='https://wa.me/5511910647113'>
          <img src='static/images/whatsapp.png' alt='whatsapp' />
        </a>
      </li>
      
      <li>
        <a href='https://www.facebook.com/profile.php?id=100083352092137'>
          <img src='static/images/facebook.png' alt='facebook' />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/nitechacademy/'>
          <img src='static/images/instagram.png' alt='instagram' />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/nitech-academy-20133620a/'>
          <img src='static/images/linkedin.png' alt='linkedin' />
        </a>
      </li>
      <li>
        <a href='https://www.youtube.com/channel/UCFAPQS_gPgCFgNmHlDqGNIQ'>
          <img src='static/images/youtube.png' alt='youtubew' />
        </a>
      </li>
      <style jsx>{`
        .socials {
          padding-top: 40px;
          padding-bottom: 40px;
          display: flex;
          justify-content: center;
          font-size: 0;
        }
        .socials li {
          padding-left: 5px;
          padding-right: 5px;
        }
        .socials li a {
          font-size: 0;
        }
        .socials li a img {
          width: 30px;
        }
      `}</style>
    </ul>
  );
};

export default Socials;
