import Hero from '../../components/Hero';
import AboutUs from '../../components/AboutUs';
import { useEffect } from 'react';
import { ping } from '../../api/PasteleriaApi';
import InstagramSection from '../../components/InstagramSection';
import FeaturedProductsCarousel from '../../components/FeaturedProductsCarousel';

const Home = () => {
  useEffect(() => {
    ping();
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedProductsCarousel />
      <AboutUs />
      <InstagramSection />
    </div>
  );
};

export default Home;