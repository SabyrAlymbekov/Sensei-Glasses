'use client';

import { useState } from 'react';
import { initPayment } from '@/lib/TestInitPay';

export default function PaymentPage() {
  const [orderId, setOrderId] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [salt, setSalt] = useState('');
  const [merchantId, setMerchantId] = useState('');
  const [secretKey, setSecretKey] = useState('');

  const handlePayment = async () => {
    const response = await initPayment({
      pg_order_id: orderId,
      pg_amount: amount,
      pg_description: description,
      pg_salt: salt,
      pg_merchant_id: merchantId,
      secret_key: secretKey,
    });
    console.log("success")
    console.log(response);
    // Handle the response as needed
  };

  return (
    <div>
      <h1>Payment</h1>
      <input
        type="text"
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Salt"
        value={salt}
        onChange={(e) => setSalt(e.target.value)}
      />
      <input
        type="text"
        placeholder="Merchant ID"
        value={merchantId}
        onChange={(e) => setMerchantId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Secret Key"
        value={secretKey}
        onChange={(e) => setSecretKey(e.target.value)}
      />
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
}
