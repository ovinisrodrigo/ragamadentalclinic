import Header from "../components/header";
import Footer from "../components/footer";
import AppointmentForm from "../components/AppointmentForm";

export default function Appointments() {
  return (
    <div className="w-full">
      <Header />
      <AppointmentForm />
      <Footer />
    </div>
  );
}
