import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const {
    name,
    email,
    msg,
    cargo,
    transportType,
    index,
    loadingPlace,
    loadingCountry,
    deliveryPlace,
    deliveryCountry,
    paymentTerms,
    handle,
  } = await request.json();

  const transport = nodemailer.createTransport({
    host: 'smtp.ukr.net',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.TO_EMAIL,
    subject: `Message from vitam.com.ua`,
    text: `You have new request: 
          
          from: ${name}; 
          email: ${email}; 
          message: ${msg};
          
          cargo details: 
          cargo: ${cargo};
          transport: ${transportType};
          index: ${index};
          from: ${loadingPlace} (${loadingCountry});
          where: ${deliveryPlace} (${deliveryCountry});
          payment: ${paymentTerms};
          response: ${handle}`,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
