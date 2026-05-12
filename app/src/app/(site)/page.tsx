import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import DoctorSection from "@/components/DoctorSection";
import SpecialOffers from "@/components/SpecialOffers";
import AppointmentCTA from "@/components/AppointmentCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <DoctorSection />
      <SpecialOffers />
      <AppointmentCTA />
    </>
  );
}
