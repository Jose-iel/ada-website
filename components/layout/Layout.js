import { Fragment } from 'react';
import Headers from './Headers';
import Footer from './Footer';

const Layout = props => {
  return (
    <Fragment>
      <Headers />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
