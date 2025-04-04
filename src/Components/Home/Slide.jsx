import { Link } from "react-router-dom";
import { motion } from "motion/react"


const Slide = ({image,text}) => {
    return (
        <div className='w-full bg-center bg-cover h-[440px]' style={{backgroundImage: `url(${image})`}}>
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
            <div className='text-center'>
            <h1 className='text-3xl font-semibold text-white lg:text-4xl'>{text}</h1>
            <br />
            <Link className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-purple-500 rounded-md lg:w-auto focus:outline-none'><motion.button animate={{ rotate: 360 ,transition: { duration: 2 }}} >Micro Task & Earning</motion.button></Link>
            </div>
            </div>
        </div>
    );
};

export default Slide;