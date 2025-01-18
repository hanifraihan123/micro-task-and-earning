import { Link } from "react-router-dom";

const PurchaseCoin = () => {
  return (
    <div>
      <h3 className="font-bold text-3xl text-center py-6">Purchase Coin</h3>
      <div className="flex gap-4 p-4">
        <Link to="/dashboard/payment">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body text-center font-bold text-3xl">
            <p>10 coins</p>
            <p>=</p>
            <p>1 $</p>
          </div>
        </div>
        </Link>
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body text-center font-bold text-3xl">
            <p>150 coins</p>
            <p>=</p>
            <p>10 $</p>
          </div>
        </div>
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body text-center font-bold text-3xl">
            <p>500 coins</p>
            <p>=</p>
            <p>20 $</p>
          </div>
        </div>
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body text-center font-bold text-3xl">
            <p>1000 coins</p>
            <p>=</p>
            <p>35 $</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCoin;
