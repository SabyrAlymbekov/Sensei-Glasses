'use server';

import crypto from 'crypto';
import { URLSearchParams } from 'url';

interface PaymentParams {
  pg_order_id: string;
  pg_amount: string;
  pg_description: string;
  pg_salt: string;
  pg_merchant_id: string;
  secret_key: string;
}

export async function initPayment(params: PaymentParams) {
  const {
    pg_order_id,
    pg_amount,
    pg_description,
    pg_salt,
    pg_merchant_id,
    secret_key,
  } = params;

  // Form the signature string
  const signatureString = `init_payment.php;${pg_amount};${pg_description};${pg_merchant_id};${pg_order_id};${pg_salt};${secret_key}`;

  // Generate the signature
  const pg_sig = crypto.createHash('md5').update(signatureString).digest('hex');

  // Prepare the request data
  const formData = new URLSearchParams();
  formData.append('pg_order_id', pg_order_id);
  formData.append('pg_merchant_id', pg_merchant_id);
  formData.append('pg_amount', pg_amount);
  formData.append('pg_description', pg_description);
  formData.append('pg_salt', pg_salt);
  formData.append('pg_sig', pg_sig);

  // Send the request to Freedom Pay's server
  const response = await fetch('https://api.freedompay.kg/init_payment.php', {
    method: 'POST',
    body: formData,
  });

  const data = await response.text();

  // Return the response data
  return data;
}
