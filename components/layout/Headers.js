import Head from 'next/head';
import { cms } from "../../cms";

const Headers = () => {
  return (
    <Head>
      <meta
        name='description'
        content={cms.header.head.meta}
      />
      <title>{cms.header.head.title}</title>
      <link rel='stylesheet' href='/static/css/global.css' />
      <link rel="icon" type="image/x-icon" href={cms.header.head.favIcon}></link>
    </Head>
  );
};
export default Headers;
