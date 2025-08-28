import Header from "./components/header";
import HeroSection from "./components/herosection";
import ClinicInfo from "./components/clinicinfo";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <ClinicInfo />
      <Footer />
    </div>
  );
}

