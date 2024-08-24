import Head from 'next/head';
import DeviationScoreCalculator from './components/DeviationScoreCalculator';
import MotivationalQuote from './components/MotivationalQuote';
import { Container, Grid } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-5463240386609584"></meta>
      </Head>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <DeviationScoreCalculator />
          </Grid>
          <Grid item xs={12} md={5}>
            <MotivationalQuote />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
