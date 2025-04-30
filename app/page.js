
import BeliefSection from "./components/BeliefSection";
import CardSection from "./components/CardSection";
import CausesSection from "./components/CausesSection";

import FundraisingSection from "./components/FundraisingSection";
import HelpSection from "./components/HelpSection";
import HeroSection from "./components/HeroSection";
import SupportSection from "./components/SupportSection";
import VolunteerCardSection from "./components/VolunteerCardSection";
import VolunteerSection from "./components/VolunteerSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <SupportSection />
      <CardSection />
      <BeliefSection/>
      <FundraisingSection/>
      <CausesSection/>
      <HelpSection/>
      <VolunteerSection/>
      <VolunteerCardSection/>
     
    </div>
  );
}