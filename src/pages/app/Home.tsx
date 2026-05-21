// import { useEffect } from 'react';
import Hero from '../../components/Hero';
import AboutUs from '../../components/AboutUs';
// import { Link } from 'react-router-dom';
// import Testimonials from '../../components/Testimonials';
import { useEffect } from 'react';
import { ping } from '../../api/PasteleriaApi';
import InstagramSection from '../../components/InstagramSection';
// import type { FeaturedProduct } from '../../interfaces/FeaturedProduct';

const Home = () => {
  useEffect(() => {
    ping();
  }, []);

  return (
    <div>
      <Hero />
      <AboutUs />
      <InstagramSection />
    </div>
  );
};

export default Home;