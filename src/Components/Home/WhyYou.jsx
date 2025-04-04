const WhyYou = () => {
  return (
    <div className="">
      <h3 className="font-bold text-3xl text-lime-100 text-center pt-6 pb-2">
        Why You Will Choose Us ?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-6">
        <div className="bg-cyan-500 text-white shadow-xl rounded-xl p-4 flex items-center">
          <div className="">
            <h2 className="font-semibold text-2xl pb-2">Secure Transactions</h2>
            <p>Enjoy peace of mind with robust encryption and safe payment methods.</p>
          </div>
        </div>
        <div className="card bg-cyan-500 text-white  shadow-xl">
          <div className="card-body">
            <h2 className="font-semibold text-xl">Quick and Reliable Services</h2>
            <p>Delivering micro-tasks with precision and efficiency.</p>
          </div>
        </div>
        <div className="card bg-cyan-500 text-white  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Earn on Your Terms</h2>
            <p>Flexible opportunities to earn with no fixed schedules.</p>
          </div>
        </div>
        <div className="card bg-cyan-500 text-white  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Diverse Task Categories</h2>
            <p>From data entry to digital marketing, choose what suits you best.</p>
          </div>
        </div>
        <div className="card bg-cyan-500 text-white  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Affordable Pricing</h2>
            <p>Competitive rates for businesses and fair earnings for workers.</p>
          </div>
        </div>
        <div className="card bg-cyan-500 text-white  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">User-Friendly Platform</h2>
            <p>Intuitive interface for seamless task management.</p>
          </div>
        </div>
        <div className="card bg-cyan-500 text-white  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Highly Secured Data</h2>
            <p>We value our user's important data to protect.</p>
          </div>
        </div>
        <div className="card bg-cyan-500 text-white  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Transparent Exchange</h2>
            <p>Instant cash transfer by stripe payment system.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyYou;
