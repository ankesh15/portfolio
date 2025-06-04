import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, subject, message } = formData;

    // Create a Nodemailer transporter using your Gmail SMTP details
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address from .env.local
        pass: process.env.GMAIL_PASS, // Your Gmail password or App Password from .env.local
      },
    });

    // Set up email data
    const mailOptions = {
      from: process.env.GMAIL_USER, // Sender address (should be the account used for sending)
      to: 'openai672@gmail.com', // Your email address where you want to receive messages
      subject: `New message from ${name}: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    // Provide a more informative error message while protecting sensitive details
    let errorMessage = 'An unknown error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: 'Failed to send message.', error: errorMessage }, { status: 500 });
  }
} 