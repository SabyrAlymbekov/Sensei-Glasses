'use client';

import { useState } from 'react';

export default function PaymentPage() {
  const [orderId, setOrderId] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [salt, setSalt] = useState('');
  const [merchantId, setMerchantId] = useState('');
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const handlePayment = async () => {
    setIsLoading(true);
    setResponseMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/initPayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pg_order_id: orderId,
          pg_amount: amount,
          pg_description: description,
          pg_salt: salt,
          pg_merchant_id: merchantId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Payment initialization failed');
      }

      const data = await response.json();
      setResponseMessage(`Payment Success: ${data.message}`);
      console.log("success", data);
    } catch (error: unknown) { // Изменено с 'any' на 'unknown'
      if (error instanceof Error) {
        setErrorMessage(`Payment Error: ${error.message}`);
        console.error("Payment Error:", error);
      } else {
        setErrorMessage('An unexpected error occurred.');
        console.error("Payment Error:", error);
      }
    } finally {
      setIsLoading(false);
    }
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
      <button onClick={handlePayment} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Pay'}
      </button>
      {responseMessage && <p style={{ color: 'green' }}>{responseMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}