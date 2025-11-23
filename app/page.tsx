import Hero from "@/components/Hero";
import OriginStory from "@/components/OriginStory";
import Diagnosis from "@/components/Diagnosis";
import People from "@/components/People";
import CoreTenets from "@/components/CoreTenets";
import CallToCompetent from "@/components/CallToCompetent";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Hero />
      <OriginStory />
      <Diagnosis />
      <People />
      <CoreTenets />
      <CallToCompetent />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
