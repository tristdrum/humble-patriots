import Hero from "@/components/Hero";
import Diagnosis from "@/components/Diagnosis";
import CoreTenets from "@/components/CoreTenets";
import CallToCompetent from "@/components/CallToCompetent";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Hero />
      <Diagnosis />
      <CoreTenets />
      <CallToCompetent />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
