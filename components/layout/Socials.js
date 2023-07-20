import React from 'react';
import { cms } from "../../cms";

const Socials = () => {
  return (
    <ul className='socials'>
      {cms.social.links.map((el) => 
        <li key={el.id}>
          <a href={el.url}>
            <img src={el.image} alt='whatsapp' />
          </a>
        </li>
      )}
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
