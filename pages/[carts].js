import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MyCta from '@/components/Cta';
import { CheckoutButton } from '@/components/Buttons';
import { Button } from '@mui/material';
import MyH1 from '@/components/text';

export default function CartPage(params) {
  const router = useRouter();
  const [productQuantity,setProductQuantity] = React.useState(1);

  const myQueryParams = parseFloat(router.query.productprice);
  const myQueryName = router.query.productname;

  
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: myQueryName,
      price: myQueryParams,
      imageUrl: '/images/2.png'
    },
  ]);

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * productQuantity;
  }, 0);

  const handleAddQuantity = () => {
    setProductQuantity(productQuantity + 1);
  }

  const handleReduceQuantity = () => {
    setProductQuantity(productQuantity - 1);
  }

  // Handle removing an item from the cart
  const handleRemoveItem = (id) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((item) => item.id !== id);
    });
  };

  return (
    <div className='flex items-center flex-col mb-5'>
      <MyH1 text={'Shopping Cart'} style={'rounded-lg'}/>
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
                        src={item.imageUrl}/>
                    </div>
                    <div className="flex flex-col gap-1 text-sm">
                        <blockquote className="flex flex-row gap-3">
                          <ul className="font-bold">
                              <li>Product name: </li>
                              <li>Product price: </li>
                          </ul>
                          
                          <ul>
                              <li>{item.name}</li>
                              <li>${item.price}</li>
                          </ul>
                        </blockquote>
                        <ul className='flex items-center font-bold'>
                          <li>Quantity: </li>
                            <li className="flex items-center justify-center">
                              <Button
                              style={{
                                color:'black'
                              }} 
                              onClick={handleReduceQuantity}> 
                              - </Button>
                              {productQuantity}
                              <Button 
                              style={{
                                color:'black'
                              }}
                              onClick={handleAddQuantity}>
                                 + </Button>
                            </li>
                        </ul>
                    </div>
                    <Button 
                      style={
                        {
                          color:'black',
                        }
                      }
                    onClick={() => handleRemoveItem(item.id)}>Remove Item</Button>
                  </article>
              </section>
            ))}
          </ul>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <CheckoutButton productName={router.query.productname} 
          quantity={productQuantity}
          totalPrice={totalPrice}
          unitPrice={myQueryParams}
          />
        </>
      ) : (
        <div className='flex items-center flex-col'>
          <p>Your cart is empty.</p>
          <MyCta />
        </div>
      )}
    </div>
  );
}

