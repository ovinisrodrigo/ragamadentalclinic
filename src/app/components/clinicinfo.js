import Image from "next/image";

function ClinicInfo() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Text Section */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-800 font-semibold leading-relaxed max-w-4xl mx-auto">
            Ragama Dental Clinic started operating in 1996. With almost 3 decades of experience in the private dental care sector, we bring you the best care for your dental needs.
            At our clinic, experienced dentists use modern equipment to deliver gentle, precise treatment tailored to your needs. We explain options clearly, offer transparent pricing, and 
            follow strict sterilization and safety protocols. With convenient online booking, on-time appointments, and caring follow-up, your visit is smooth from check-in to smile.</p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* Image 1 */}
          <div className="bg-white shadow-lg overflow-hidden">
            <Image 
              src="/clinic-image-1.jpg" 
              alt="Dental treatment room 1" 
              width={600} 
              height={400}
              className="w-full h-95 object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="bg-white shadow-lg overflow-hidden">
            <Image 
              src="/clinic-image-2.jpg" 
              alt="Dental treatment room 2" 
              width={600} 
              height={400}
              className="w-full h-95 object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="bg-white shadow-lg overflow-hidden">
            <Image 
              src="/clinic-image-3.jpg" 
              alt="Dental treatment room 3" 
              width={600} 
              height={400}
              className="w-full h-95 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicInfo;
