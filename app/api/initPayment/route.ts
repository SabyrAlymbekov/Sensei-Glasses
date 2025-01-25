// app/api/initPayment/route.ts

import { NextResponse } from 'next/server';
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

export async function POST(request: Request) {
  try {
    // Извлечение и парсинг JSON тела запроса
    const params: PaymentParams = await request.json();

    const {
      pg_order_id,
      pg_amount,
      pg_description,
      pg_salt,
      pg_merchant_id,
    } = params;

    // Получение секретного ключа из переменных окружения
    const secret_key = process.env.FREEDOMPAY_SECRET_KEY_RECEIVING;
    if (!secret_key) {
      return NextResponse.json(
        { status: 'error', message: 'Secret key is not defined.' },
        { status: 500 }
      );
    }

    // Формирование строки для подписи
    const signatureString = `init_payment.php;${pg_amount};${pg_description};${pg_merchant_id};${pg_order_id};${pg_salt};${secret_key}`;

    // Генерация подписи с использованием MD5
    const pg_sig = crypto.createHash('md5').update(signatureString).digest('hex');

    // Подготовка данных запроса в формате x-www-form-urlencoded
    const formData = new URLSearchParams({
      pg_order_id,
      pg_merchant_id,
      pg_amount,
      pg_description,
      pg_salt,
      pg_sig,
    });

    // Отправка POST-запроса на сервер Freedom Pay
    const response = await fetch('https://api.freedompay.kg/init_payment.php', {
      method: 'POST',
      body: formData.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // Проверка успешности ответа
    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { status: 'error', message: `Payment initialization failed: ${response.status} - ${errorText}` },
        { status: response.status }
      );
    }

    // Парсинг JSON ответа от Freedom Pay
    const data = await response.json() as PaymentResponse;

    // Возврат успешного ответа клиенту
    return NextResponse.json(data, { status: 200 });

  } catch (error: unknown) { // Исправлено с 'any' на 'unknown'
    console.error('initPayment Error:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { status: 'error', message: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { status: 'error', message: 'An unexpected error occurred.' },
        { status: 500 }
      );
    }
  }
}