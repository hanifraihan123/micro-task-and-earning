import { Link } from "react-router-dom";

const PurchaseCoin = () => {

  return (
    <div>
      <h3 className="font-bold text-3xl text-center py-6">Purchase Coin</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:p-4 p-2 justify-center items-center">
        <Link to={`/dashboard/payment/${1}`}>
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body text-center font-bold text-3xl">
            <p>10 coins</p>
            <p>=</p>
            <p>1 $</p>
          </div>
        </div>
        </Link>
        <Link to={`/dashboard/payment/${10}`}>
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body text-center font-bold text-3xl">
            <p>150 coins</p>
            <p>=</p>
            <p>10 $</p>
          </div>
        </div>
        </Link>
        <Link to={`/dashboard/payment/${20}`}>
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body text-center font-bold text-3xl">
            <p>500 coins</p>
            <p>=</p>
            <p>20 $</p>
          </div>
        </div>
        </Link>
        <Link to={`/dashboard/payment/${35}`}>
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body text-center font-bold text-3xl">
            <p>1000 coins</p>
            <p>=</p>
            <p>35 $</p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default PurchaseCoin;
