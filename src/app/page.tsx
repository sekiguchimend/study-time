import Script from 'next/script';
import DeviationScoreCalculator from './components/DeviationScoreCalculator';
import MotivationalQuote from './components/MotivationalQuote';
import { Container, Grid } from '@mui/material';
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>偏差値予測計算機</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta property="og:title" content="偏差値予測計算機" />
        <meta property="og:description" content="今の偏差値と勉強時間だけで未来の偏差値とオススメの参考書を提示してくれるサイト" />
        <meta property="og:image" content="https://study-time-32om.vercel.app/favicon.jpg" />
        <meta property="og:url" content="https://study-time-32om.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5463240386609584"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <DeviationScoreCalculator />
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <MotivationalQuote />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
