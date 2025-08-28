import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import { servicesData } from "../components/servicesData";

export default function Services() {
  return (
    <div className="w-full">
      <Header />
      <div className="bg-white min-h-screen px-60 py-16">
        <h1 className="text-6xl text-black font-bold mb-16 text-center">Our Services</h1>
        
        {/* Services Grid */}
        <div className="space-y-8">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-teal-100 p-8 rounded-lg flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-3xl text-black font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-black leading-relaxed">
                  {service.description}
                </p>
              </div>
              <Link href="/appointments">
                <button className="bg-teal-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors ml-8">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
