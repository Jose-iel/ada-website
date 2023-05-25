import Head from 'next/head';
const Headers = props => {
  return (
    <Head>
      <meta
        name='description'
        content='Seja atitude, seja impacto. Seja Nitech!'
      />
      <title>NITECH Digital</title>
      <link rel='stylesheet' href='/static/css/global.css' />
      <link rel="icon" type="image/x-icon" href="../../static/images/favicon.png"></link>
    </Head>
  );
};
export default Headers;
