import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_payment_key);

const Payment = () => {
  const { id } = useParams();
  console.log("id lagbe ", id);
  const [payment, setPayment] = useState({});
  console.log("payment", payment);
  useEffect(() => {
    fetch(`http://localhost:5000/singleClass/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPayment(data);
      });
  }, [id]);
  return (
    <div className="w-1/2 m-8">
      <Elements stripe={stripePromise}>
        <CheckOut payment={payment}></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;
