import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import MainLayout from "./Layout/MainLayout";
import SecondBanner from "./components/Banner/SecondBanner";
import Testimonial from "./components/Testimonial/Testimonial";
import Newsletter from "./components/Newsletter/Newsletter";

const App = () => {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Banner />
      <SecondBanner />
      <Testimonial />
      <Newsletter />
    </MainLayout>
  );
};

export default App;
