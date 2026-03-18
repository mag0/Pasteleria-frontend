// import { useEffect } from 'react';
import Hero from '../../components/Hero';
import AboutUs from '../../components/AboutUs';
// import { Link } from 'react-router-dom';
import Testimonials from '../../components/Testimonials';
import { useEffect } from 'react';
import { ping } from '../../api/PasteleriaApi';
// import type { FeaturedProduct } from '../../interfaces/FeaturedProduct';

const Home = () => {
  useEffect(() => {
    ping();
  }, []);

  // const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>([]);

  // useEffect(() => {
  //   fetch('/json/featuredProducts.json')
  //     .then(res => res.json())
  //     .then(data => setFeaturedProducts(data));
  // }, []);

  return (
    <div>
      <Hero />
      <AboutUs />
      <Testimonials />
    </div>
  );
};

export default Home;