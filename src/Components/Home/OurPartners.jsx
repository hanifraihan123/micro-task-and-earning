import { motion } from "motion/react"

const OurPartners = () => {
  return (
    <div className="bg-cyan-500 text-white">
      <h3 className="font-bold text-3xl text-center py-6 text-lime-100">Our Partners</h3>
      <div className="lg:flex gap-4 items-center">
        <div className="pb-4 flex-1">
          <h4 className="font-bold text-center text-2xl pb-4">
            We Value Our Sponsors
          </h4>
          <p className="text-center">
            They are our inspiration to go ahead. <br />
            We can't deny their contribution to our journey. <br />
            It's a blessing for us to have partners like them. <br />
            They always support us and stand beside us <br /> in any unexpected
            situation
          </p>
        </div>
        <div className="lg:pr-10 flex-1 px-4 pb-10">
          <div className="card bg-blue-100 shadow-xl">
            <figure className="p-10">
              <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }}
                src="https://i.ibb.co.com/G49XkLmP/fran-innocenti-I-Lx-DFIIRIA-unsplash.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
          </div>
        </div>
        <div className="lg:pr-10 flex-1 px-4 pb-10">
          <div className="card bg-blue-100 shadow-xl">
            <figure className="p-10">
              <img
                src="https://i.ibb.co.com/RJTSscd/toni-koraza-mgb8o-LBKIqw-unsplash.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
