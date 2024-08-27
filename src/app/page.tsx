import Script from 'next/script';
import DeviationScoreCalculator from './components/DeviationScoreCalculator';
import MotivationalQuote from './components/MotivationalQuote';
import { Container, Grid } from '@mui/material';
import Header from './components/Header';
import styles from './Home.module.css'; // CSSモジュールを使用

const Home: React.FC = () => {
  return (
    <>
    <Header />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5463240386609584"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
            <div className={styles.spacer}></div> {/* 新しく追加 */}

     <Container maxWidth="lg"className='all'>
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
