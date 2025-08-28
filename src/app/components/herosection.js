import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="bg-teal-100 flex items-center justify-between min-h-screen px-32 py-16">
      {/* Left side - Text and Button */}
      <div className="flex flex-col items-start space-y-8">
        <h1 className="text-9xl text-black font-bold text-left">
          Your Smile,<br />
          Our Priority
        </h1>
        <Link href="/appointments">
          <button className="bg-teal-600 text-3xl text-white font-semibold px-6 py-6 rounded-md hover:bg-teal-700 transition-colors cursor-pointer">
            Book an Appointment
          </button>
        </Link>
      </div>

      {/* Right side - Image */}
      <div className="flex items-center justify-center">
        <Image 
          src="/heropageimage.png" 
          alt="patient" 
          width={800} 
          height={1000}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default HeroSection;