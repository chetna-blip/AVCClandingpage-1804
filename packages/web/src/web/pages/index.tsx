import { Closing } from "../components/closing";
import { Criteria, Qualification } from "../components/criteria";
import { Discount } from "../components/discount";
import { Faq } from "../components/faq";
import { Hero } from "../components/hero";
import { Nav } from "../components/nav";
import { PrizeStrip } from "../components/prize-strip";
import { Results } from "../components/results";
import { Steps } from "../components/steps";
import { ChallengeDetails } from "../components/challenge-details";
import { useReveal } from "../hooks/use-reveal";

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <PrizeStrip />
        <Criteria />
        <Steps />
        <Qualification />
        <ChallengeDetails />
        <Results />
        <Discount />
        <Faq />
        <Closing />
      </main>
    </div>
  );
}

export default Index;
