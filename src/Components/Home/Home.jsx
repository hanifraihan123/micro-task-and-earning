import Banner from "./Banner";
import BestWorkers from "./BestWorkers";
import OurPartners from "./OurPartners";
import Statistics from "./Statistics";
import Testimonial from "./Testimonial";
import WhyYou from "./WhyYou";


const Home = () => {
    return (
        <div>
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