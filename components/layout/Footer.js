import Socials from './Socials';
const Footer = () => {
  return (
    <footer className='dark-bg'>
      <div className='container'>
        <Socials />
      </div>
      <p className='copy'>todos os direitos reservados &copy; CNPJ: 41.945.587/0001-99  nitech 2023 </p>
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
