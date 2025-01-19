import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import useRole from "../Hooks/useRole";

const CheckoutForm = () => {

    const {price} = useParams();
    const stripe = useStripe();
    const elements = useElements();
    const {role,refetch} = useRole();
    const navigate = useNavigate();
    const id = role?._id;
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [clientSecret,setClientSecret] = useState('');
    const [transactionId,setTransactionId] = useState('');
    const [error,setError] = useState('');

    const actualPrice = price;
    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price: actualPrice})
        .then(res=>{
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
        // console.log('payment method', paymentMethod)
        setError('')
    }

    const {paymentIntent, error: cardError} = await stripe.confirmCardPayment(clientSecret,{
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })
    if(cardError){
      console.log(cardError)
    }
    else{
      // console.log('payment intent', paymentIntent)
      if(paymentIntent.status === 'succeeded'){
        setTransactionId(paymentIntent.id)
        const paymentInfo = {
          name: user?.displayName,
          email: user?.email,
          date: new Date(),
          transactionId: paymentIntent.id,
          amount: paymentIntent.amount
        }
        const res = await axiosSecure.post('/payment', paymentInfo)
        let coin = 10;
        if(paymentIntent.amount === 1000){coin = coin + 140}
        if(paymentIntent.amount === 2000){coin = coin + 490}
        if(paymentIntent.amount === 3500){coin = coin + 990}

        const upCoin = role?.coin + coin

        if(res.data.insertedId){
          const updateCoin = {newCoin: upCoin}
          const result = await axiosSecure.patch(`/changeCoin/${id}`, updateCoin)
          if(result.data.modifiedCount > 0){
            refetch();
            toast.success('Payment Completed Successfully')
            setTimeout(()=>{navigate('/dashboard/paymentHistory')},2000)
          }
        }
      }
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
      {transactionId && <p>Your Transaction Id: {transactionId}</p>}
    </form>
  );
};

export default CheckoutForm;
