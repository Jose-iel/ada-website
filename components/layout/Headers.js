import Head from 'next/head';
const Headers = props => {
  return (
    <Head>
      <meta
        name='description'
        content='NITECH uma empresa feita pensada em você.'
      />
      <title>NITECH | Digital</title>
      <link rel='stylesheet' href='/static/css/global.css' />
    </Head>
  );
};
export default Headers;
