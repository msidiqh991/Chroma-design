import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import MainLayout from "./components/Layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Banner />
    </MainLayout>
  );
};

export default App;
