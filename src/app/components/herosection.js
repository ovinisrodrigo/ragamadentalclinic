import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="bg-teal-100 min-h-[70vh] md:min-h-[85vh] px-4 md:px-32 pt-10 md:pt-16 pb-0">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-end">
        <div className="flex flex-col items-start justify-center md:pb-16">
          <h1 className="text-4xl sm:text-5xl md:text-8xl xl:text-9xl text-black font-bold leading-tight md:leading-[1.02]">
            Your Smile,
            <br />
            Our Priority
          </h1>
          <Link href="/appointments" className="mt-6 md:mt-10">
            <button className="bg-teal-600 text-white font-semibold text-base md:text-xl px-5 md:px-8 py-3 md:py-4 rounded-full shadow-md hover:bg-teal-700 transition-colors">
              Book an Appointment
            </button>
          </Link>
        </div>
        <div className="relative w-full h-[280px] sm:h-[340px] md:h-[540px] justify-self-end self-end">
          <Image
            src="/heropageimage.png"
            alt="patient"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;