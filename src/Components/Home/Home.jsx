import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BestWorkers from "./BestWorkers";
import OurPartners from "./OurPartners";
import Statistics from "./Statistics";
import Testimonial from "./Testimonial";
import WhyYou from "./WhyYou";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PaidWork || Home</title>
      </Helmet>
      <Banner></Banner>
      <BestWorkers></BestWorkers>
      <Testimonial></Testimonial>
      <Statistics></Statistics>
      <OurPartners></OurPartners>
      <WhyYou></WhyYou>
    </div>
  );
};

export default Home;
