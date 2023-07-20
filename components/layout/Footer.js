import Socials from './Socials';
import { cms } from "../../cms";

const Footer = () => {
  return (
    <footer className='dark-bg'>
      <div className='container'>
        <Socials />
      </div>
      <p className='copy'>{cms.footer.copy}</p>
      <style jsx>
        {`
          footer .copy {
            padding-top: 15px;
            padding-bottom: 15px;
            color: #fff;
            background-color: #0d1217;
            text-align: center;
            text-transform: uppercase;
            font-size: 14px;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
