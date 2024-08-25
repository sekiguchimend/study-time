import Head from 'next/head';
import DeviationScoreCalculator from './components/DeviationScoreCalculator';
import MotivationalQuote from './components/MotivationalQuote';
import AffiliateBooks from './components/AffiliateBooks';
import { Container, Grid } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5463240386609584"
          crossOrigin="anonymous"
        ></script>
      </Head>
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
              <Grid item>
              <AffiliateBooks previousScores={{
    国語: 50,
    数学: 50,
    理科: 50,
    社会: 50,
    英語: 50,
  }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}