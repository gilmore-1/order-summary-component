import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  Anual,
  AnualYear,
  AnulText,
  Button,
  Cancel,
  Card,
  Change,
  H1,
  Img,
  Main,
  Music,
  P,
  Section,
} from "./components/Card";
import IllustrationHero from "./assets/illustration-hero.svg";
import MusicIcon from "./assets/icon-music.svg";
function App() {
  return (
    <div className="App">
      <Card>
        <Img src={IllustrationHero} />
        <Main className="main">
          <H1>Order Summary</H1>
          <P>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </P>
          <Section>
            <Music src={MusicIcon}></Music>
            <Anual>
            <AnulText>Annual Plan</AnulText>
            <AnualYear>$59.99/year</AnualYear>
            <Change>Change</Change>
            </Anual>
          </Section>
          <Button>Proceed to Payment</Button>
          <Cancel>Cancel Order</Cancel>
        </Main>
      </Card>
    </div>
  );
}

export default App;
