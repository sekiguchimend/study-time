import Script from 'next/script';
import DeviationScoreCalculator from './components/DeviationScoreCalculator';
import MotivationalQuote from './components/MotivationalQuote';
import { Container, Grid } from '@mui/material';

const Home: React.FC = () => {
  return (
    <>
     
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
