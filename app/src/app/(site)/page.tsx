import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Lazy load heavy components that are below the fold
const TrustSection = dynamic(() => import("@/components/TrustSection"));
const DoctorSection = dynamic(() => import("@/components/DoctorSection"));
const TestimonialVideo = dynamic(() => import("@/components/TestimonialVideo"));
const BeforeAfterSection = dynamic(() => import("@/components/BeforeAfterSection"));
const SpecialOffers = dynamic(() => import("@/components/SpecialOffers"));
const AppointmentCTA = dynamic(() => import("@/components/AppointmentCTA"));

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <DoctorSection />
      <TestimonialVideo />
      <BeforeAfterSection />
      <SpecialOffers />
      <AppointmentCTA />
    </>
  );
}
