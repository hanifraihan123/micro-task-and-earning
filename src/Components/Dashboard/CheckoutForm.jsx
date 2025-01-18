import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [clientSecret,setClientSecret] = useState('');
    const [error,setError] = useState('');

    const actualPrice = 1;
    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price: actualPrice})
        .then(res=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure,actualPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!stripe || !elements){
        return;
    }
    const card = elements.getElement(CardElement)
    if(card == null){
        return;
    }

    const {error,paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })
    if(error){
        console.log('payment error', error)
        setError(error.message)
    }
    else{
        console.log('payment method', paymentMethod)
        setError('')
    }

  };

  return (
    <form onSubmit={handleSubmit} className="m-6">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-sm my-4 btn-info" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default CheckoutForm;
