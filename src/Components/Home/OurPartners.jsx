const OurPartners = () => {
  return (
    <div className="bg-orange-300">
      <h3 className="font-bold text-3xl text-center py-6">Our Partners</h3>
      <div className="flex gap-4 items-center justify-center">
        <div className="w-1/3">
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
        <div className="w-1/3 pr-10 pb-10">
          <div className="card bg-orange-100 shadow-xl">
            <figure className="p-10">
              <img
                src="https://i.ibb.co.com/z4J0TjM/boss-approving-congratulating-young-successful-employee.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
          </div>
        </div>
        <div className="w-1/3 pr-10 pb-10">
          <div className="card bg-orange-100 shadow-xl">
            <figure className="p-10">
              <img
                src="https://i.ibb.co.com/vL1s359/welcome-tell-us-something-about-your-work-experience.jpg"
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
