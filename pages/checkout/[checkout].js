import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from '@mui/material';
import MyCta from '@/components/Cta';
import { CheckoutButton } from '@/components/Buttons';
import OrderForm from '@/components/shipment';
import MyH1 from '@/components/text';

export default function Checkout(params) {
  const router = useRouter();
  
  const [cartItems, setCartItems] = React.useState([
    router.query
  ]);

  const total = parseInt(router.query.totalprice);

  return (
    <main className='flex items-center flex-col'>
      <MyH1 style={'rounded-xl px-5 text-md'}
      text={"Check out"}/>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item) => (
               <section className="flex flex-col gap-2 justify-center items-center lg:grid md:grid lg:grid-cols-4 md:grid-cols-2 lg:px-2 md:px-2 my-5">
                  <article id={item.id} className="flex flex-col gap-2 p-2 items-center justify-center rounded-md border-2 border-red-300/40">
                    <div className="w-[200px] rounded-full">
                        <Image 
                        alt="product image"
                        width={957}
                        height={652}
                        className="w-full h-auto"
                        src={'/images/2.png'}/>
                    </div>
                    <div className="flex flex-row gap-3 text-sm">
                        <ul className="font-bold">
                            <li>Product name: </li>
                            <li>Product price: </li>
                            <li>Quantity: </li>
                        </ul>
                        
                        <ul>
                            <li>{item.productname}</li>
                            <li>${item.unitprice}</li>
                            <li className="flex gap-1">
                              {item.quantity}
                            </li>
                        </ul>
                    </div>
                  </article>
              </section>
            ))}
          </ul>
          <p>Total Price: ${total.toFixed(2)}</p>
          <div>
            <OrderForm />
          </div>
        </>
      ) : (
        <div className='flex items-center flex-col'>
          <p>Your cart is empty.</p>
          <MyCta />
        </div>
      )}
    </main>
  );
}

