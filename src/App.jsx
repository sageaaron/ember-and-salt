import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import BookingProcess from "./sections/BookingProcess";
import Dishes from "./sections/Dishes";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";
import TimeSlots from "./sections/TimeSlots";
import LenisScroll from "./components/LenisScroll";

const App = () => {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Dishes />
      <Features />
      <BookingProcess />
      <TimeSlots />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default App;
