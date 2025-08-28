"use client";

function AppointmentForm() {
  const handleBookNow = () => {
    window.alert("You have successfully booked your Appointment!");
  };

  return (
    <section className="bg-white px-60 py-16">
      <h1 className="text-4xl text-black font-bold mb-12 text-center">Book Your Appointment</h1>

      <form className="max-w-3xl mx-auto space-y-6">
        {/* First Name */}
        <div className="grid grid-cols-3 items-center gap-6">
          <label className="col-span-1 text-black text-lg">First Name</label>
          <input
            type="text"
            className="col-span-2 border-2 border-teal-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder:text-gray-400"
            placeholder="First name"
          />
        </div>

        {/* Last Name */}
        <div className="grid grid-cols-3 items-center gap-6">
          <label className="col-span-1 text-black text-lg">Last Name</label>
          <input
            type="text"
            className="col-span-2 border-2 border-teal-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder:text-gray-400"
            placeholder="Last name"
          />
        </div>

        {/* Age */}
        <div className="grid grid-cols-3 items-center gap-6">
          <label className="col-span-1 text-black text-lg">Age</label>
          <input
            type="number"
            className="col-span-2 border-2 border-teal-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder:text-gray-400"
            placeholder="Age"
          />
        </div>

        {/* Contact Number */}
        <div className="grid grid-cols-3 items-center gap-6">
          <label className="col-span-1 text-black text-lg">Contact Number</label>
          <input
            type="tel"
            className="col-span-2 border-2 border-teal-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder:text-gray-400"
            placeholder="Phone number"
          />
        </div>

        {/* Treatment Required */}
        <div className="grid grid-cols-3 items-center gap-6">
          <label className="col-span-1 text-black text-lg">Treatment Required</label>
          <input
            type="text"
            className="col-span-2 border-2 border-teal-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder:text-gray-400"
            placeholder="e.g., Scaling, Filling, Whitening"
          />
        </div>

        {/* Appointment Date */}
        <div className="grid grid-cols-3 items-center gap-6">
          <label className="col-span-1 text-black text-lg">Appointment Date</label>
          <input
            type="date"
            className="col-span-2 border-2 border-teal-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
          />
        </div>

        {/* Appointment Time */}
        <div className="grid grid-cols-3 items-center gap-6">
          <label className="col-span-1 text-black text-lg">Appointment Time</label>
          <input
            type="time"
            className="col-span-2 border-2 border-teal-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
          />
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="button"
            onClick={handleBookNow}
            className="block w-80 mx-auto bg-teal-600 text-white text-xl font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-teal-700 transition-colors"
          >
            Book Now
          </button>
        </div>
      </form>
    </section>
  );
}

export default AppointmentForm;
