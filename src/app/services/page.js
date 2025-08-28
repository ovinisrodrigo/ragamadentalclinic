import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import { servicesData } from "../components/servicesData";

export default function Services() {
  return (
    <div className="w-full">
      <Header />
      <div className="bg-white min-h-screen px-4 sm:px-10 md:px-20 lg:px-60 py-12 md:py-16">
        <h1 className="text-4xl md:text-6xl text-black font-bold mb-12 md:mb-16 text-center">Our Services</h1>
        <div className="space-y-6 md:space-y-8">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-teal-100 p-5 md:p-8 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl text-black font-bold mb-3 md:mb-4">{service.title}</h2>
                <p className="text-base md:text-lg text-black leading-relaxed">
                  {service.description}
                </p>
              </div>
              <Link href="/appointments" className="md:ml-8">
                <button className="bg-teal-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-teal-700 transition-colors w-full md:w-auto">
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
