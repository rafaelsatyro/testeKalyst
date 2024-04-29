"use client"
import React from 'react';
import { Inter } from "next/font/google";
import Checkout from './components/Checkout';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <Checkout />
      </body>
    </html>
  );
}
