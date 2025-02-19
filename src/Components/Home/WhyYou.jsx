const WhyYou = () => {
  return (
    <div className="bg-blue-100">
      <h3 className="font-bold text-3xl text-center pt-6 pb-2">
        Why You Will Choose Us ?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-6">
        <div className="card bg-lime-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Secure Transactions</h2>
            <p>Enjoy peace of mind with robust encryption and safe payment methods.</p>
          </div>
        </div>
        <div className="card bg-lime-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Quick and Reliable Services</h2>
            <p>Delivering micro-tasks with precision and efficiency.</p>
          </div>
        </div>
        <div className="card bg-lime-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Earn on Your Terms</h2>
            <p>Flexible opportunities to earn with no fixed schedules.</p>
          </div>
        </div>
        <div className="card bg-lime-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Diverse Task Categories</h2>
            <p>From data entry to digital marketing, choose what suits you best.</p>
          </div>
        </div>
        <div className="card bg-lime-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Affordable Pricing</h2>
            <p>Competitive rates for businesses and fair earnings for workers.</p>
          </div>
        </div>
        <div className="card bg-lime-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">User-Friendly Platform</h2>
            <p>Intuitive interface for seamless task management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyYou;
