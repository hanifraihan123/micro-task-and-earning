import { TiTick } from "react-icons/ti";
import tech from '../../assets/tech.jpg';

const ExtraSection = () => {
    return (
        <>
         <h3 className="font-bold text-3xl text-center text-lime-100 pt-10">
        What We Provide
      </h3>
        <div className="flex flex-col lg:flex-row gap-40 lg:gap-8 items-center justify-center p-10 lg:mb-20 mb-10 text-lime-100">
            <div className="relative lg:flex-1">
                <img className="rounded-lg h-80 w-92 object-cover" src={tech} alt="" />
                <div className="p-4 rounded-xl bg-slate-200 text-black lg:w-1/2 w-2/3 absolute lg:-mt-16 -mt-32 lg:ml-20 ml-10">
                    <h4 className="font-bold text-2xl">Modern approach</h4>
                    <p>Our modern server housing means that <br /> you can work anytime, anywhere, with <br /> stable platform performance. Join now <br /> and start working with us today.</p>
                </div>
            </div>
            <div className="space-y-4 lg:flex-1">
            <h3 className="font-bold text-3xl">High End Technology</h3> 
           <p className="text-xl">Our modern server housing <br /> ensures that we can guarantee you <br /> stable performance and availability <br /> of our platform – no matter when <br /> you’re working or where you are.</p>
           <p className="flex gap-2 items-center"><TiTick className="text-2xl" /> State-of-the-art technology</p>
           <p className="flex gap-2 items-center"><TiTick className="text-2xl" /> High availability guaranteed</p>
           <p className="flex gap-2 items-center"><TiTick className="text-2xl" /> High safety standards</p>
            </div>
        </div>
        </>
    );
};

export default ExtraSection;