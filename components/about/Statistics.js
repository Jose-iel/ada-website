import React from 'react';
import Statistic from './Statistic';
import { cms } from "../../cms";

const Statistics = () => {
  return (
    <div id='statistics' className='dark-bg'>
      <div className='stas overlay-bg'>
        {cms.statistics.infos.map((el) => 
          <Statistic
            icon={el.icon}
            name={el.name}
            number={el.number}
            key={el.id}
          />
        )}
      </div>

      <div className='contact second-bg'>
        <h2>{cms.statistics.title}</h2>
        <a href={cms?.statistics.linkWhatsapp}><button className='btn first'>fale conosco</button></a>
      </div>
      <style jsx>
        {`
          #statistics {
            display: flex;
          }
          #statistics .stas {
            display: flex;
            flex-basis: 60%;
            background-image: url('static/images/home-bg.webp');
            background-size: cover;
            background-position: center;
            position: relative;
            background-attachment: fixed;
          }
          #statistics .contact {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          #statistics .contact h2 {
            margin-bottom: 20px;
          }
          @media (max-width: 1090px) {
            #statistics {
              flex-direction: column;
            }
            #statistics .contact {
              padding: 50px;
            }
          }
          @media (max-width: 660px) {
            #statistics .stas {
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Statistics;
