'use server';

import crypto from 'crypto';

interface PaymentParams {
  pg_order_id: string;
  pg_amount: string;
  pg_description: string;
  pg_salt: string;
  pg_merchant_id: string;
}

interface PaymentResponse {
  status: string;
  message: string;
  // Добавьте другие поля по необходимости
}

export async function initPayment(params: PaymentParams): Promise<PaymentResponse> {
  const {
    pg_order_id,
    pg_amount,
    pg_description,
    pg_salt,
    pg_merchant_id,
  } = params;

  const secret_key = process.env.FREEDOMPAY_SECRET_KEY_RECEIVING;
  if (!secret_key) {
    throw new Error('Secret key for receiving payments is not defined in environment variables.');
  }

  // Формирование строки подписи
  const signatureString = `init_payment.php;${pg_amount};${pg_description};${pg_merchant_id};${pg_order_id};${pg_salt};${secret_key}`;

  // Генерация подписи
  const pg_sig = crypto.createHash('md5').update(signatureString).digest('hex');

  // Подготовка данных запроса
  const formData = new URLSearchParams({
    pg_order_id,
    pg_merchant_id,
    pg_amount,
    pg_description,
    pg_salt,
    pg_sig,
  });

  // Отправка запроса на сервер Freedom Pay
  const response = await fetch('https://api.freedompay.kg/init_payment.php', {
    method: 'POST',
    body: formData.toString(),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Payment initialization failed: ${response.status} - ${errorText}`);
  }

  const data = await response.json() as PaymentResponse;

  // Возврат данных ответа
  return data;
}